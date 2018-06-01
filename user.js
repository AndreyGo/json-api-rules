{
  "id": 10966,  // меняем тип string-like-number → number
  "gender": {
    "id": 1,
    "code": "male", // добавляем (male || female)
    "name": "Мужчина"
  },
  "nationality": {
    "id": "1",
    "name": "Русский", // правильное склонение по роду должно быть сформировано на бэке в зависимости от пола
    "sorting": "100",
    "deleted": false, // меняем тип string-like-number → bool (0 → false)
    // "name_female": "Русская" // → соответственно, убираем
    "visibility": { // Меняем ключ "show_status" на более логичный
      "id": 1,
      "name": "Показывать мою национальность всем"
    }
  },
  // переносим "show_status" в "nationality" ↑
  // "nationality_show_status": {
  //   "id": 1,
  //   "name": "Показывать мою национальность всем"
  // },
  "religion": {
    "id": "24",
    "name": "Атеизм",
    "deleted": false, // меняем тип string-like-number → bool (0 → false)
    // убираем
    // "name_female": "Атеистка",
    // "name_male": "Атеист"
    // 
    // склонение формируем на бэке, меняем ключ
    "status": "Атеист",
  },
  "goal": {
    "id": 3,
    "name": "Дружба",
    // "icon": "friendship" // убираем, теперь не нужно
  },
  "looking_for": {
    "id": 3,
    "name": "Друзей"
  },
  "children": {
    "id": 1,
    "name": "Есть"
  },
  "relationship": {
    "id": 2,
    "name": "В браке"
  },
  "smoking": {
    "id": 1,
    "name": "Не курю и не приемлю"
  },
  "alcohol": {
    "id": 1,
    "name": "Не пью"
  },
  "orientation": {
    "id": 1,
    "name": "Гетеро"
  },
  // переносим возраст в объект
  "age": {
    "from": 21,
    "to": 30
  },
  "height": 183,
  "weight": 66,
  // Убираем "about_raw", а его содержимое выводим просто в "about"
  // было:
  // "about": "Такие \"дела\". Вот.",
  // "about_raw": "Такие &quot;дела&quot;. Вот.",
  // стало:
  "about": "Такие &quot;дела&quot;. Вот.",
  "is_premium": false,
  "end_premium": null, // если не null, то должна быть дата в обычном формате "2018-06-01 10:08:14"
  "last_auth": "2018-06-01 10:08:14",
  "name": "Александр",
  // "name_genitive": "Александра", // убираем, склоняться будет на фронте
  "birthday": {
    // Убираем:
    // "year": "1987",
    // "month": "04",
    // "day": "04",
    // "long": "4 апреля 1987 г.",
    // 
    // Приводим к общему виду, как в других местах:
    "date": "1987-04-04",
    "age": 31,
    "zodiac": {
      "name": "Овен",
      "id": "aries" // меняем ключ ico → id
    }
  },
  "avatar": {
    "small": "//img.linkyou.ru/3786461007/7395b14483e73ef2bbd4ea29c6789ac5/small.jpg",
    "default": "//img.linkyou.ru/3786461007/7395b14483e73ef2bbd4ea29c6789ac5/default.jpg",
    "origin": "//img.linkyou.ru/3786461007/7395b14483e73ef2bbd4ea29c6789ac5/origin.jpg"
  },
  "is_online": false, // делаем bool
  // "online": false, // убираем
  "is_stealth": false, // добавляем, отвечает за то, _куплен_ ли режим невидимости или нет
  "is_invisible": false, // добавляем, отвечает за то, _активирован_ ли режим невидимости или нет
  "is_vip": true, // добавляем, отвечает за то, куплено ли размещение на главной или нет
  "end_vip": "2018-06-01 10:08:14", // добавляем время окончания размещения на главной
  "job": { // меняем ключ career → job
    "id": 6293,
    "profession": "Веб-разработчик",
    "profession_id": 2064,
    "occupation": "IT, интернет", // меняем ключ prof_area → occupation 
    "occupation_id": 79, // меняем ключ prof_area → occupation 
    "finance": {
      "id": 5,
      "name": "Хорошо зарабатываю"
    },
    // "finance_id": 5, // дубликат, убираем
    "company_name": "Лукойл",
    "pros": "Хорошо платят",
    "cons": "Много работы",
    "achievements": "Повышение"
  },
  "location": {
    "country_name": "Россия",
    "country_id": 7,
    "city_name": "Санкт-Петербург",
    "city_id": 830
  },
  "education": [
    {
      "id": 5474, // меняем тип string-like-number → number
      "user_id": 10966, // меняем тип string-like-number → number
      // "type_id": 2, // дубликат, убираем
      // "institution_id": "5044", // дубликат, убираем
      // Делаем из специальности объект
      "speciality": {
        "name": "Экономика и управление",
        "id": null
      },
      "active": true, // меняем тип string-like-number → bool (1 → true)
      "deleted": false, // меняем тип string-like-number → bool (0 → false)
      "last_update": "2017-01-19 15:29:14",
      // "institution_name": "МГУ", // дубликат, убираем
      "education_type": { // no camel case (educationType → education_type)
        "id": 2,
        "name": "Среднее специальное"
      },
      "institution": {
        "id": 5044, // меняем тип string-like-number → number
        "user_id": 10966, // меняем тип string-like-number → number
        "city_id": null,
        "name": "МГУ",
        "active": false, // меняем тип string-like-number → bool (0 → false)
        "deleted": false // меняем тип string-like-number → bool (0 → false)
      }
    }
  ],
  "interests": {
    "id": 7117,
    "interests": "музыка,путешествия,автоспорт" // лучше сделать простой массив, если можно
  },
  "languages": [
    {
      "id": 57532, // меняем тип string-like-number → number
      "user_id": 10966, // меняем тип string-like-number → number
      // "language_id": 8, // дубликат, убираем
      // "level_id": 1, // дубликат, убираем
      "deleted": false, // меняем тип string-like-number → bool (0 → false)
      "last_update": "2017-06-29 14:05:44",
      "language": {
        "id": 8, // меняем тип string-like-number → number
        "name": "Русский",
        "sorting": 100, // меняем тип string-like-number → number
        "deleted": false // меняем тип string-like-number → bool (0 → false)
      },
      "level": {
        "id": 1,
        "name": "Родной язык"
      }
    },
    {
      "id": 78695, // меняем тип string-like-number → number
      "user_id": 10966, // меняем тип string-like-number → number
      // "language_id": "4", // дубликат, убираем
      // "level_id": "4", // дубликат, убираем
      "deleted": false, // меняем тип string-like-number → bool (0 → false)
      "last_update": "2017-08-21 11:06:19",
      "language": {
        "id": 4, // меняем тип string-like-number → number
        "name": "Английский",
        "sorting": 90, // меняем тип string-like-number → number
        "deleted": false // меняем тип string-like-number → bool (0 → false)
      },
      "level": {
        "id": 4,
        "name": "Свободно владею"
      }
    }
  ],
  "music": [
    {
      "id": 656, // меняем тип string-like-number → number
      "user_id": 10966, // меняем тип string-like-number → number
      "link": "https://music.yandex.ru/album/2156794/track/85537",
      "source": "https://music.yandex.ru/iframe/#track/85537/2156794",
      "deleted": false, // меняем тип string-like-number → bool (0 → false)
      "datetime": "2016-11-23 12:10:50"
    },
    {
      "id": 15195, // меняем тип string-like-number → number
      "user_id": 10966, // меняем тип string-like-number → number
      "link": "https://music.yandex.ru/album/2156794/track/85537",
      "source": "https://music.yandex.ru/iframe/#track/85537",
      "deleted": false, // меняем тип string-like-number → bool (0 → false)
      "datetime": "2018-05-31 11:43:43"
    },
    {
      "id": 15196, // меняем тип string-like-number → number
      "user_id": 10966, // меняем тип string-like-number → number
      "link": "https://music.yandex.ru/album/2156794/track/85537",
      "source": "https://music.yandex.ru/iframe/#track/85537",
      "deleted": false, // меняем тип string-like-number → bool (0 → false)
      "datetime": "2018-05-31 11:43:44"
    }
  ],
  "books": [ // меняем ключ book → books
    {
      "id": 2288, // меняем тип string-like-number → number
      "user_id": 10966, // меняем тип string-like-number → number
      // Убираем префикс book_ у полей
      "name": "Идиот",
      "author": "Достоевский",
      "deleted": false, // меняем тип string-like-number → bool (0 → false)
      "last_update": "2016-12-05 15:54:56"
    }
  ],
  "pets": [ // меняем ключ pet → pets
    {
      "id": 11647, // меняем тип string-like-number → number
      "user_id": 10966, // меняем тип string-like-number → number
      // Убираем префикс pet_ у полей
      "name": "Василий",
      "type": "Дог",
      "description": "Большой и быстрый",
      "avatar": "https://img.linkyou.ru/3012003445/a7fc8daffb601b99b2bf6ea0d1e85b0b/origin.jpg",
      "deleted": false, // меняем тип string-like-number → bool (0 → false)
      "last_update": "2018-05-31 13:46:02"
    }
  ],
  "likes": {
    "count": 110,
    "is_liked": false
  },
  "is_favorited": false, // меняем тип string-like-number → bool; меняем ключ favorited → is_favorited
  "is_blacklisted": false, // меняем тип string-like-number → bool; меняем ключ blacklisted → is_blacklisted
  "rating": { // Если рейтинг спрятан, выводим не объект, а null (сейчас выводится строка "Добавьте 3 фото, чтобы узнать ваш рейтинг")
    "score": 8.14, // меняем ключ rating → score
    "likes": 110, // меняем ключ users_likes → likes
    "views": 216 // меняем ключ users_view → views
  },
  "gifts": {
    "count": 1,
    "free_gifts": 0,
    "items": [
      {
        "id": 1544, // меняем тип string-like-number → number
        "datetime": "2018-05-31 13:46:02", // приводим к обычному виду как и везде
        // "datetime_unix": 1527845953, // убираем
        "is_private": false, // меняем тип string-like-number → bool
        "shown": false, // меняем тип string-like-number → bool
        "comment": "",
        "from_user_id": 2, // меняем тип string-like-number → number
        "src": "//static.linkyou.klendev.ru/90f77ba/ly/public/img/presents/dumbbell.jpg", // добавляем
        "name": "Гантеля" // добавляем
      }
    ]
  },
  "photos_count": 2,
  "blogs": {
    // убираем один уровень вложенности
    "count": 1,
    "items": [
      {
        "id": 5709, // меняем тип string-like-number → number
        "content": "sdsd",
        "user_id": 10966, // меняем тип string-like-number → number
        "video_link": null,
        "deleted": false, // меняем тип string-like-number → bool (0 → false)
        "sort": 0, // можно убрать, иначе меняем тип string-like-number → number ("0" → 0)
        "datetime": "2018-05-31 13:46:02", // приводим к обычному виду как и везде
        // "datetime_unix": 1527839300, // убираем
        "likes": {
          "count": 2, // меняем тип string-like-number → number
          "is_liked": false
        },
        "comments": { // добавляем
          "count": 0,
          "items": []
        },
        "views": 54 // добавляем
      },
      {
        "id": 5708, // меняем тип string-like-number → number
        "content": "haha",
        "user_id": 10966, // меняем тип string-like-number → number
        "video_link": null,
        "deleted": false, // меняем тип string-like-number → bool (0 → false)
        "sort": 0, // можно убрать, иначе меняем тип string-like-number → number ("0" → 0)
        "datetime": "2018-05-31 13:46:02", // приводим к обычному виду как и везде
        // "datetime_unix": 1527839293, // убираем
        "likes": {
          "count": 2, // меняем тип string-like-number → number
          "is_liked": false
        },
        "comments": { // добавляем
          "count": 2,
          "items": []
        },
        "views": 219 // добавляем
      }
    ]
  }
}
