import './assets/css/index.css';

document.getElementById('app').innerHTML = `
<div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAC6CAMAAAAu0KfDAAAAhFBMVEX///+O1foceMCJ0/qB0frS7v36/f/j8/7n9v4AcL17z/oAbby24vwMc77i6/UAX7ZXkMrS5PGAqNWX2Pvy+v+i3Pvc8f4AarsAZrnE6P285fzL6/2u4PxEhsZ4o9JyzPqJsNnH2exrm8+hvd++0eg1f8Orx+OTt9xqlcwAWrU4esEATK8NKt7gAAAKE0lEQVR4nO2da5uyOA+AhUIVEUUt4gEdj8zM8/7///e2eGgKBVpQYPYiX/ba3bHclKRJQxMGg1566aWXXnrppZde/gtCIsz+MZrgtkk0BW+QdUf/Wq7+EjxZGZbxQB8b42D0V+CxHVnI4OgGQpNR21BKMowMCg7RKfxyS9rmKpctSsBFdDrxyG6brFjwDlmGIUFn/74cdlfl8Sp4gWfRDWRFw7YRc2Q1sZBRgE7/E9p00V7JxIDgUnRmr5u2QTOySYHnoFN7NVZts0LBzAWlRY5OZRx0x16pdaanvAid2uu2Gyo/nCAJeBE6Wyg37bsovF1KwYvRqcovdy2T7zLWqYaewLe4yuPVMg+sHJ3Cj6OWVB6vIpl1qqOzmW/FRVEXlF0QNdETF9X4QrnJs049dKbyzYaUNiqecXV0tsovG9MaPAzGZVOugc7staGNyGgrd0HV0ZmL2n0ePt8F1UGnKh98OqS0l2pTrouewH/SRQ2X5dZZFZ3Za/Apex1FKtZZHZ3BfyQqG21LXFBmChN0ovUrwwp2b3dR5S5IRDCeS8ZoWxguZG7ZCN7rooaGsnUm1x9vwdwRJTfAf4yC92kNdUEal6YTF6WuPQq07twYT94DP9R94rJsi60Hz/WthpCNrnWCnPRpzsexdRZW5l/tmvaqO1tLm8/W9PDvduT/OtooxGxgEuq5qJHeskKXZT5T5Og4pueZMR+ORHo2Y6VtRlXwSPNKRsTBpxcnNBNZ304cgAT5e1nZkONKLkrTBVkG2GiS635tPsULzyd+T3akqYH69jrStM6IWye+nqmuAHHNBbTXQGvkcaBrrnS3r34FC77qmv+YnpkS598CPJOdur1WS2zjneKjRQaIO6aHdQacaY0XxsCEFXcr1XM1OJ13lo5uAKc//XZcCfjDXmNgr5HS0DUyZKuyK6AlyHxO432YB57Y688VawxtVAkHyOs32C6KX2iYxcFx7LsyXYEq7x1O/O9XRWEZGk94Kpuo34MNVAzvxnlGJbzLPflZ65TMvHngGDg/J2IZwPB3GhpvW2MQeGJpFpqaEHg9MfVn5dx3+BkIDvBGaq+CkrNlWgedpQP5FYYZPyImmadH1ymHfkpoxtPXT8kkE2xYBkjLjCbswWihJ44MOEHRjwip/en3rcg6JRPv+mCxSb1aQCjiT5Ns7t5FE53FbnAQviAIL1TIZV9mnRJ45+f6GkFIGVuBDZX88T900VMRFXkkBKhrBjmH697TBk/gvTNYCuxH2IHG4EmDvZU+eiq9QGNgKgAcD/ezSuBMnBlYbNjrESoRDDLB0lkFna6AwjIVAOvE84XU6SuL61yAvW6WUD/FKKQaespu+LTMj7dcp68Mv7/wZ8idBE5HlxXRZVt8eg/fFZVcFM/bXzOXX2U2JJXRGX0qEIr/vQP8Du/PhaGx5BVVHXQxJMf+75vAmbi/3/zSRBpq10IXg/7pG/T8IYJ/ytvg1EM3xFBivgg1fH++uB5YZQabnGxVXXRDOL6FT2DrXFW89VlQ9ElOFFwb3RBzsDh2amq8uxct9NPoZMq3AEezutZ4zu3yuiKZNoE+9b+5dp4OXkV493YEw5wPuBH0cH95rQnk6ldReW994LpC16v1ohl0j7oRvsckcai7UHprEyTELjfPc5pCZ7t7HwR5C0dLaxzzAva0JrvxBtHpxVyo8j/qcYFrLvgP54+MU6PodI+5B24w9tVWSrrF4LpGt4YPXWsYnWL8AIzYVFD5cH8Ft7t/3W7T6Az+wB/+9PBbAu7MLiDe94GSNY9Or7n+BrmBwhie3ifITv4IW8M20FkalOvAID955whKfkmlVdtBp2HrAUKZ0qQMVHIS++m/aQmdZf4PcL0LM38ghLYnP6tWraEzdeBeJhsOr8GdkYNsFW0RnWUSgcpfwdaV7pzBKnSRZydbRWfbhhMIhx/OxnN8/uZUeLPXIXTm4kEcOz+yHWAoKPkhN9ZpG51O8Z5v7qnKz2ZnqOQF+5LW0Rm8y+NwfAWvXy6FSb4OoFOZneeZl7T5St4pdLqIf6d2y6dD6QuybqAnWVCQpOSh7R9AN8EOEF/2Cluo7qAnO8D7OUeVKL5b6NT7JzDzshi+i+juHV3tfWqP3qP36D16j96j9+g9eo/eo/foPfofRlc71aiD7oXHJtBxQeqwInp4+27kjEBS0ZDN/ldHd9zFM/PxKXSEXiOQ2Cw9GaCKvvZ5bnuTc+K89gEq4W9it+QFtRK65/w7wVGJvIq41ok7I1OBSw63QpVXQPe8/SVzbVn9WQ104ZDwS04LryC1VY7+sk5xSjbZo2uV0YU6RDvix6jw/Jx/prcM3QmP/DzTYAMqsrLVtVUPxsLqTxykDiSfcs+uF6N7Mx+k4VfsoDOoxh+mWqBUQhdqbsl9OsTuKPFNbq9F6J4DjpSyepPk4SJbvJla6BQcnJzmJaNUhcDh+6M0DZ2PTsGBdQ55uzALnKUWei3oowt1DWI7GKEcYn6UpKJz0cM9eKsnVikitIUq/zqVrF3wAJU805GMPhBor4tZeuZz0N0QgGfbWFhLXlyGX0Xd2mUmQKFlRTgIgb/A833qFZ0U3VuD15EDW1Yoj8BJUGxb2mUmQscZvMopfUJfsKgqVbYhQfe8H2idRo7bF0ZNGhhooI/BYxsU9TwSlJO9NvLy0fPLYgpHJZFhaaBD/1BS/oiEEiVwGiaNvgan3NiohTWnsEcStjUKxAn/WXnDiXRh2NNeRfQwjIusUzIqLDqpUJe/UqviFsrxho8zVBDdcUDhndTmJYNaNRpQqDe7QJIiSI7umOAoj7QLYd6oFXskqfY8es7RBFR3sQObT3THO4vWqT5o1TZ+jyVVHR42tJ3Gt987+v/8Kyyh1OojYBjjSo218Gii1QKBuRcQ/E3ve/z5pcAjl45YrQVCci29xhOMPr9JB9HreJKUoVXkTkSz3Qd7wvLu2USlQZsAbtTtO0h2es1R2FxlHQgrqtPsHBK8oYG43kqTzFe6e7ata51v67420msoxOCFXkh6HT5S0XZteL02TnTarOe06VtnHS8qk52+vSYTT3K7EOSAw9jlTaLZFKlSt7XPtCxjFJM/2iiOyafb8320g+zqk00RP9wHVGHvUQVdSPh8TEB65G3ojTQAHdy7ar237arV4PcfVHY66s1u3+yCymRXaq+qLYY/2rJUKqRsV6+Cjlr69sBwUrudttHWFx9wYY9KhSbmbwwQ9cWu0zq+5Q8O5Luokob9b+6uWknyWhAWoaOGXFCpyJO2BR+nQB35OMVA95MgXx37alX2Uw9/40MsTEha5WXobbmgMkn1HpN9dKg1F1QmpZ966vLXzWCvQMkHttrGK5HXK4v0Z806Z51Zeb43S31MrlPrYa6sMp/w644LKpPkuzh/8cOJTPAOje/oX523zozgx0dCt22D9NJLL7300ksvvfTyHvk/mT/aUS/tgxgAAAAASUVORK5CYII=" /><p>Webpack Web Starter</p></div>`;