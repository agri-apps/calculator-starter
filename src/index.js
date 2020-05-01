import "./assets/css/index.css";
import "./assets/css/progress.css";
import "./assets/css/stats.css";
import "./assets/css/tooltips.css";
import "./assets/css/inputs.css";

import * as Router from "navigo";
import createStore from "./store";
import { slideDiv, tmpl } from "./helpers";
import Swipe from './helpers/swipe';

import resultsHTML from "./pages/results.html";
import weightsHTML from "./pages/weights.html";

var root = null;
var useHash = true;
var hash = "#!";
var router = new Router(root, useHash, hash);

window.router = router;

const storeKey = "calculator-app";

let state = localStorage.getItem(storeKey)
  ? JSON.parse(localStorage.getItem(storeKey))
  : {
      currentWeight: 650,
      marketWeight: 1400,
      weightGained: 750,
      weightUnits: 'lbs'
    };

const store = createStore(state, ({ state }) => {

  const { currentWeight = 0, marketWeight = 0 } = state;

  let weightGained = marketWeight - currentWeight;

  store.pause();
  store.set('weightGained', weightGained);
  store.set('weightUnits', 'lbs');
  store.resume();

  localStorage.setItem(storeKey, JSON.stringify({...state, weightGained}));
});

let currentHTML = "";

const validations = {
  
};

function $id(id) {
  return document.getElementById(id);
}

function update(html) {
  unbind();
  if (html) {
    currentHTML = html;
  }
  loadHTML("content", tmpl(currentHTML, store.getStore()));
  bindAll();
}

function unbind() {
  [].slice.call(document.querySelectorAll("[data-bind]")).forEach((item) => {
    let evt = item.dataset["event"] || "blur";
    item.removeEventListener(evt, listen, false);
  });
  [].slice.call(document.querySelectorAll("[data-connect]")).forEach((item) => {
    let evt = item.dataset["event"] || "input";
    item.removeEventListener(evt, connect, false);
  });
}

function bindAll() {
  [].slice.call(document.querySelectorAll("[data-bind]")).forEach((item) => {
    let evt = item.dataset["event"] || "blur";
    item.addEventListener(evt, listen, false);
  });

  console.log('connectors', [].slice.call(document.querySelectorAll("[data-connect]")));

  [].slice.call(document.querySelectorAll("[data-connect]")).forEach((item) => {
    let name = item.dataset["connect"];
    let evt = item.dataset["event"] || 'input';
    let target = document.querySelector(`[name="${name}"]`)
    console.log('connecting', name, evt, target)
    if (target) {
      item.addEventListener(evt, connect.bind(null, target), false);
    }
  });
}

function loadHTML(id, html) {
  $id(id).innerHTML = html;
}

function connect(item, evt) {
  console.log('connect', item, evt);
  item.value = evt.target.value;
}

function listen(e) {
  const { target } = e;

  const {
    value,
    event = "blur",
    bind,
    refresh,
    type,
    validation,
  } = target.dataset;

  const convert = (str) => {
    let converters = {
      bool: `${str}` === "true" || `${str}` === "1",
      date: Date.parse(str),
      number: parseFloat(str),
    };
    if (converters.hasOwnProperty(type)) {
      return converters[type];
    }
    return str;
  };

  let done = () => {};

  switch (event) {
    case "click":
      if (value) {
        done = () => {
          store.set(bind, convert(value));
        };
      }
      break;
    case "blur":
    case "change":
      if (value) {
        done = () => {
          store.set(bind, convert(value));
        };
      } else if (target.value) {
        done = () => {
          store.set(bind, convert(target.value));
        };
      }
      break;
  }

  let updateFn = () => {
    if (refresh || target.hasAttribute("data-refresh")) {
      update();
    }
  };

  if (!validation || !validations[validation]) {
    done();
    updateFn();
  } else {
    validations[validation]({ ...store.getStore(), [bind]: value }, () => {
      done();
      updateFn();
    });
  }
}

router.hooks({
  before: (done) => {
    // slide transitions
    let el = $id("content");
    if (el && el.firstChild) {
      slideDiv(el.firstChild, "left", 150);
      setTimeout(() => {
        done();
      }, 100);
    } else {
      done();
    }
  },
  after: () => {
    bindAll();
    [].slice.call(document.querySelectorAll('[data-route].active')).forEach(item => {
      item.classList.remove('active');
    });
    let url = router.lastRouteResolved().url;
    let activeEl = document.querySelector(`[data-route="#!${url}"]`);
    if (activeEl) {
      activeEl.classList.add('active');
    }

  },
});

router
  .on({
    weights: () => {
      update(weightsHTML);
    },
    "*": () => {
      update(resultsHTML);
    },
  })
  .resolve();

  var swiper = new Swipe('#content');
  swiper.onLeft(function (e) {
    const { url } = router.lastRouteResolved();
    router.navigate(url === 'weights' ? 'results' : 'weights');
  });
  swiper.onRight(function () {
    const { url } = router.lastRouteResolved();
    router.navigate(url === 'weights' ? 'results' : 'weights');
    console.log('swipe right', url);
  });
  swiper.run();
