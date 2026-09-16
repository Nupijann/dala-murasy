/* ═══════════════════════════════════════════════════════════════
   i18n-data.js — RU/EN translation dictionaries for Дала Мұрасы.
   Pure data, no DOM logic. Loaded by both index.html and mobile.html.
   KZ is the baseline (already in the page HTML/inline JS) — these
   dictionaries provide ru/en overrides only.
   ═══════════════════════════════════════════════════════════════ */

const UI_I18N = {
  "ru": {
    "nav_exhibits": "Экспонаты",
    "nav_nomads": "Следы кочевников",
    "nav_quiz": "Викторина",
    "hero_title_a": "Казахское наследие в",
    "hero_title_em": "3D",
    "hero_title_b": "формате",
    "stat_exhibit": "Экспонат",
    "stat_3dmodel": "3D-модель",
    "stat_quizq": "Вопросов в викторине",
    "exhibits_h2_a": "Избранные",
    "exhibits_h2_em": "экспонаты",
    "exhibits_sub": "Featured artefacts",
    "filt_all": "Все",
    "filt_home": "Быт",
    "filt_clothing": "Одежда",
    "filt_music": "Музыка",
    "filt_craft": "Ремёсла",
    "filt_jewelry": "Ювелирика",
    "filt_game": "Игры",
    "filt_weapon": "Оружие",
    "filt_ancient": "Древность",
    "vbadge_360": "360° · интерактив",
    "vctrl_history": "История",
    "exhibit_word": "Экспонат",
    "action_fallback": "Подробнее →",
    "quiz_fallback": "Викторина",
    "qr_title_fallback": "QR-архив",
    "qr_text_fallback": "Отсканируйте QR, чтобы получить дополнительные сведения.",
    "nomads_kicker": "◆ Следы кочевников · 14 областей + 3 города республиканского значения · 3 жуза",
    "nomads_h2_a": "Следы",
    "nomads_h2_em": "кочевников",
    "nomads_p": "Каждый уголок казахской земли — отдельное сказание. Нажмите на область или город на карте, чтобы узнать о батырах, памятниках и традициях региона. Старший, Средний, Младший жузы — три рукава одной реки. В 2022 году отделившиеся Жетысуская, Улытауская и Абайская области упомянуты в тексте материнских регионов.",
    "nomads_filt_all": "Все",
    "map_legend_capital": "Город респ. значения",
    "map_hint": "◆ нажмите на область или город",
    "mp_empty_title": "Выберите область или город",
    "mp_empty_text": "14 областей + 3 города республиканского значения — от Туркестана до Алтая. У каждого региона — свой батыр, своя легенда, свой памятник.",
    "mp_empty_small": "◆ Нажмите на регион",
    "badge_capital": "Столица республики",
    "badge_city": "Город респ. значения",
    "mp_block_batyrs": "◆ Батыры · ханы · личности",
    "mp_block_monuments": "◆ Памятники",
    "mp_block_tags": "◆ Традиции · искусство",
    "wiki_loading": "Загрузка фото Wikipedia…",
    "wiki_not_found": "фото не найдено",
    "wiki_load_error": "не удалось загрузить фото",
    "mp_source": "◆ фото: Wikipedia Commons · подробнее — нажмите на фото",
    "heritage_kicker": "◆ Мир · казахское и тюркское наследие сегодня",
    "heritage_h3_a": "Следы кочевников",
    "heritage_h3_em": "в мире",
    "heritage_p": "Казахское и тюркское наследие сегодня продолжает жить в десятках стран — в языке, традициях, искусстве. Тюркский мир — более 180 миллионов человек, свыше 40 языков.",
    "quiz_kicker_a": "ИНТЕРАКТИВ ·",
    "quiz_kicker_b": "ВИКТОРИН",
    "quiz_h2_a": "Викторина по",
    "quiz_h2_em": "экспонатам",
    "quiz_p": "Отдельная викторина для каждого экспоната. Ответьте на 5 вопросов об истории, материалах и традициях.",
    "quiz_count_quiz": "викторин",
    "quiz_count_q": "вопросов",
    "quiz_count_passed": "пройдено",
    "quiz_back": "Вернуться к экспонатам",
    "quiz_play_eyebrow": "ВИКТОРИНА",
    "quiz_word": "вопрос",
    "quiz_try_word": "попробуйте свои силы",
    "quiz_q_index": "Вопрос",
    "btn_next": "Далее →",
    "btn_finish": "Завершить →",
    "btn_start": "Начать →",
    "btn_retry": "Пройти снова →",
    "correct_word": "Верно!",
    "correct_answer_word": "Правильный ответ:",
    "result_perfect_title": "Отлично!",
    "result_good_title": "Хорошо!",
    "result_retry_title": "Изучите ещё раз",
    "result_perfect_msg": "Вы ответили верно на все вопросы!",
    "result_good_msg": "Молодец, большинство ответов верны.",
    "result_retry_msg": "Изучите историю экспоната и попробуйте снова.",
    "btn_retry2": "Пройти снова",
    "btn_other_quiz": "Другая викторина",
    "footer_tagline": "проект для молодёжи · открытая лицензия",
    "modal_close_label": "Закрыть",
    "modal_eyebrow_fallback": "Экспонат",
    "modal_link_fallback": "Открыть →",
    "zhuz_uly": "Старший жуз",
    "zhuz_orta": "Средний жуз",
    "zhuz_kishi": "Младший жуз",
    "tag_selected": "◆ Выбрано",
    "btn_back_short": "← Назад",
    "btn_see_result": "Показать результат →",
    "qm_result_perfect": "★ Отлично!",
    "qm_result_good": "Хороший результат!",
    "qm_result_review": "Изучите ещё раз!",
    "qm_result_retry": "Попробуйте ещё раз",
    "btn_back_quizzes": "← К викторинам",
    "nomads_sub_mobile": "14 областей + 3 города · 3 жуза",
    "nomads_intro_mobile": "Каждый уголок казахской земли — отдельное сказание. Нажмите на область или город на карте, чтобы узнать о батырах, памятниках и традициях региона.",
    "gh_mobile_kicker": "◆ Мир · казахское и тюркское наследие",
    "gh_mobile_p": "Тюркский мир — более 180 млн человек, 40+ языков. Наследие продолжает жить в десятках стран.",
    "quiz_sub_mobile": "30 викторин · 150 вопросов",
    "quiz_intro_mobile": "Отдельная викторина для каждого экспоната. Ответьте на 5 вопросов об истории, материалах и традициях.",
    "tab_exhibit": "Экспонаты",
    "tab_nomads": "Кочевники",
    "views_word": "просмотров"
  },
  "en": {
    "nav_exhibits": "Exhibits",
    "nav_nomads": "Traces of the Nomads",
    "nav_quiz": "Quiz",
    "hero_title_a": "Kazakh heritage in",
    "hero_title_em": "3D",
    "hero_title_b": "format",
    "stat_exhibit": "Exhibit",
    "stat_3dmodel": "3D model",
    "stat_quizq": "Quiz questions",
    "exhibits_h2_a": "Featured",
    "exhibits_h2_em": "exhibits",
    "exhibits_sub": "Featured artefacts",
    "filt_all": "All",
    "filt_home": "Household",
    "filt_clothing": "Clothing",
    "filt_music": "Music",
    "filt_craft": "Craft",
    "filt_jewelry": "Jewellery",
    "filt_game": "Games",
    "filt_weapon": "Weapons",
    "filt_ancient": "Ancient",
    "vbadge_360": "360° · interactive",
    "vctrl_history": "History",
    "exhibit_word": "Exhibit",
    "action_fallback": "Learn more →",
    "quiz_fallback": "Quiz",
    "qr_title_fallback": "QR archive",
    "qr_text_fallback": "Scan the QR code for additional information.",
    "nomads_kicker": "◆ Traces of the Nomads · 14 regions + 3 cities of republican significance · 3 zhuz",
    "nomads_h2_a": "Traces of the",
    "nomads_h2_em": "Nomads",
    "nomads_p": "Every corner of the Kazakh land is its own legend. Click a region or city on the map to learn about local batyrs, monuments and traditions. The Uly, Orta and Kishi zhuz are three branches of one river. The Jetisu, Ulytau and Abai regions, which split off in 2022, are covered within the text of their parent regions.",
    "nomads_filt_all": "All",
    "map_legend_capital": "City of rep. significance",
    "map_hint": "◆ click a region or city",
    "mp_empty_title": "Select a region or city",
    "mp_empty_text": "14 regions + 3 cities of republican significance — from Turkistan to the Altai. Every region has its own batyr, its own legend, its own monument.",
    "mp_empty_small": "◆ Click a region",
    "badge_capital": "Capital of the Republic",
    "badge_city": "City of rep. significance",
    "mp_block_batyrs": "◆ Batyrs · khans · figures",
    "mp_block_monuments": "◆ Monuments",
    "mp_block_tags": "◆ Traditions · art",
    "wiki_loading": "Loading Wikipedia photo…",
    "wiki_not_found": "photo not found",
    "wiki_load_error": "failed to load photo",
    "mp_source": "◆ photos: Wikipedia Commons · click a photo for more",
    "heritage_kicker": "◆ World · Kazakh & Turkic heritage today",
    "heritage_h3_a": "Traces of the nomads",
    "heritage_h3_em": "around the world",
    "heritage_p": "Kazakh and Turkic heritage lives on today across dozens of countries — in language, tradition and art. The Turkic world spans over 180 million people and more than 40 languages.",
    "quiz_kicker_a": "INTERACTIVE ·",
    "quiz_kicker_b": "QUIZZES",
    "quiz_h2_a": "Exhibit",
    "quiz_h2_em": "quiz",
    "quiz_p": "A dedicated quiz for every exhibit. Answer 5 questions about its history, materials and traditions.",
    "quiz_count_quiz": "quizzes",
    "quiz_count_q": "questions",
    "quiz_count_passed": "completed",
    "quiz_back": "Back to exhibits",
    "quiz_play_eyebrow": "QUIZ",
    "quiz_word": "question",
    "quiz_try_word": "test yourself",
    "quiz_q_index": "Question",
    "btn_next": "Next →",
    "btn_finish": "Finish →",
    "btn_start": "Start →",
    "btn_retry": "Retry →",
    "correct_word": "Correct!",
    "correct_answer_word": "Correct answer:",
    "result_perfect_title": "Excellent!",
    "result_good_title": "Well done!",
    "result_retry_title": "Study up and try again",
    "result_perfect_msg": "You answered every question correctly!",
    "result_good_msg": "Well done, you got most of them right.",
    "result_retry_msg": "Read up on the exhibit's history and try again.",
    "btn_retry2": "Try again",
    "btn_other_quiz": "Another quiz",
    "footer_tagline": "a project made for young people · open licence",
    "modal_close_label": "Close",
    "modal_eyebrow_fallback": "Exhibit",
    "modal_link_fallback": "Open →",
    "zhuz_uly": "Uly zhuz",
    "zhuz_orta": "Orta zhuz",
    "zhuz_kishi": "Kishi zhuz",
    "tag_selected": "◆ Selected",
    "btn_back_short": "← Back",
    "btn_see_result": "View result →",
    "qm_result_perfect": "★ Excellent!",
    "qm_result_good": "Good result!",
    "qm_result_review": "Review it again!",
    "qm_result_retry": "Try again",
    "btn_back_quizzes": "← Back to quizzes",
    "nomads_sub_mobile": "14 regions + 3 cities · 3 zhuz",
    "nomads_intro_mobile": "Every corner of the Kazakh land is its own legend. Click a region or city on the map to learn about local batyrs, monuments and traditions.",
    "gh_mobile_kicker": "◆ World · Kazakh & Turkic heritage",
    "gh_mobile_p": "The Turkic world spans over 180 million people and 40+ languages. The heritage lives on across dozens of countries.",
    "quiz_sub_mobile": "30 quizzes · 150 questions",
    "quiz_intro_mobile": "A dedicated quiz for every exhibit. Answer 5 questions about its history, materials and traditions.",
    "tab_exhibit": "Exhibits",
    "tab_nomads": "Nomads",
    "views_word": "views"
  },
  "kz": {
    "nav_exhibits": "Экспонаттар",
    "nav_nomads": "Көшпенділер іздері",
    "nav_quiz": "Викторина",
    "hero_title_a": "Қазақ мұралары",
    "hero_title_em": "3Д",
    "hero_title_b": "форматында",
    "stat_exhibit": "Экспонат",
    "stat_3dmodel": "3D моделі",
    "stat_quizq": "Викторина сұрағы",
    "exhibits_h2_a": "Таңдаулы",
    "exhibits_h2_em": "экспонаттар",
    "exhibits_sub": "Featured artefacts",
    "filt_all": "Барлығы",
    "filt_home": "Тұрмыс",
    "filt_clothing": "Киім",
    "filt_music": "Музыка",
    "filt_craft": "Қолөнер",
    "filt_jewelry": "Зергерлік",
    "filt_game": "Ойын",
    "filt_weapon": "Қару",
    "filt_ancient": "Ежелгі",
    "vbadge_360": "360° · интерактив",
    "vctrl_history": "Тарихы",
    "exhibit_word": "Экспонат",
    "action_fallback": "Толығырақ →",
    "quiz_fallback": "Викторина",
    "qr_title_fallback": "QR-архив",
    "qr_text_fallback": "QR-ды сканерлеп қосымша мәліметтерге қол жеткізіңіз.",
    "nomads_kicker": "◆ Traces of the Nomads · 14 облыс + 3 республикалық қала · 3 жүз",
    "nomads_h2_a": "Көшпенділер",
    "nomads_h2_em": "іздері",
    "nomads_p": "Қазақ жерінің әр түкпірі — жеке дастан. Картадан облысты немесе қаланы басып, өңірдің батырлары, ескерткіштері мен дәстүрлерімен танысыңыз. Ұлы, Орта, Кіші жүздер — үш арна, бір өзен. 2022 жылы бөлініп шыққан Жетісу, Ұлытау, Абай облыстары аналық облыстардың мәтінінде айтылған.",
    "nomads_filt_all": "Барлығы",
    "map_legend_capital": "Республикалық қала",
    "map_hint": "◆ облысты немесе қаланы басыңыз",
    "mp_empty_title": "Облысты немесе қаланы таңдаңыз",
    "mp_empty_text": "14 облыс + 3 республикалық қала — Түркістаннан Алтайға дейін. Әр өңірде — өз батыры, өз аңызы, өз ескерткіші.",
    "mp_empty_small": "◆ Click a region",
    "badge_capital": "Республика елордасы",
    "badge_city": "Республикалық қала",
    "mp_block_batyrs": "◆ Батырлар · хандар · тұлғалар",
    "mp_block_monuments": "◆ Ескерткіштер",
    "mp_block_tags": "◆ Дәстүрлер · өнер",
    "wiki_loading": "Wikipedia сурет жүктелуде…",
    "wiki_not_found": "сурет табылмады",
    "wiki_load_error": "сурет жүктелмеді",
    "mp_source": "◆ фото: Wikipedia Commons · толығырақ — суретті басыңыз",
    "heritage_kicker": "◆ World · Kazakh & Turkic heritage today",
    "heritage_h3_a": "Көшпенділер ізі",
    "heritage_h3_em": "әлемде",
    "heritage_p": "Қазақ пен түркі мұрасы бүгінде ондаған елде — тілінде, дәстүрінде, өнерінде жалғасын табуда. Түркі әлемі — 180 миллионнан астам адам, 40-тан аса тіл.",
    "quiz_kicker_a": "INTERACTIVE",
    "quiz_kicker_b": "QUIZZES",
    "quiz_h2_a": "Викторина",
    "quiz_h2_em": "экспонаттар",
    "quiz_p": "Әрбір экспонат үшін жеке викторина. Оның тарихы, материалы мен дәстүрі туралы 5–7 сұраққа жауап беріңіз.",
    "quiz_count_quiz": "викторина",
    "quiz_count_q": "сұрақ",
    "quiz_count_passed": "өтілді",
    "quiz_back": "Экспонаттарға оралу",
    "quiz_play_eyebrow": "ВИКТОРИНА",
    "quiz_word": "сұрақ",
    "quiz_try_word": "сынап көріңіз",
    "quiz_q_index": "Сұрақ",
    "btn_next": "Келесі →",
    "btn_finish": "Аяқтау →",
    "btn_start": "Бастау →",
    "btn_retry": "Қайта тапсыру →",
    "correct_word": "Дұрыс!",
    "correct_answer_word": "Дұрысы:",
    "result_perfect_title": "Керемет!",
    "result_good_title": "Жақсы!",
    "result_retry_title": "Мықтап оқыңыз",
    "result_perfect_msg": "Барлық сұраққа дұрыс жауап бердіңіз!",
    "result_good_msg": "Жарайсыз, көпшілігін дұрыс білдіңіз.",
    "result_retry_msg": "Экспонаттың тарихын оқып, қайта тапсыруға болады.",
    "btn_retry2": "Қайта тапсыру",
    "btn_other_quiz": "Басқа викторина",
    "footer_tagline": "жоба жастарға арналған · ашық лицензия",
    "modal_close_label": "Жабу",
    "modal_eyebrow_fallback": "Экспонат",
    "modal_link_fallback": "Ашу →",
    "zhuz_uly": "Ұлы жүз",
    "zhuz_orta": "Орта жүз",
    "zhuz_kishi": "Кіші жүз",
    "tag_selected": "◆ Таңдалды",
    "btn_back_short": "← Артқа",
    "btn_see_result": "Нәтижені көру →",
    "qm_result_perfect": "★ Керемет!",
    "qm_result_good": "Жақсы жауап!",
    "qm_result_review": "Тағы да көру!",
    "qm_result_retry": "Тағы бір рет ұрыныңыз",
    "btn_back_quizzes": "← Викториналарға",
    "nomads_sub_mobile": "14 облыс + 3 қала · 3 жүз",
    "nomads_intro_mobile": "Қазақ жерінің әр түкпірі — жеке дастан. Картадан облысты немесе қаланы басып, өңірдің батырлары, ескерткіштері мен дәстүрлерімен танысыңыз.",
    "gh_mobile_kicker": "◆ World · Kazakh & Turkic heritage",
    "gh_mobile_p": "Түркі әлемі — 180 млн адам, 40+ тіл. Мұра ондаған елде жалғасын табуда.",
    "quiz_sub_mobile": "30 викторина · 150 сұрақ",
    "quiz_intro_mobile": "Әрбір экспонат үшін жеке викторина. Оның тарихы, материалы мен дәстүрі туралы 5 сұраққа жауап беріңіз.",
    "tab_exhibit": "Экспонат",
    "tab_nomads": "Көшпелілер",
    "views_word": "қаралым"
  }
};

const CARD_I18N = {
  "yurt_low_quality_texture": {
    "ru": {
      "cat": "Жилище",
      "titleA": "Юрта",
      "titleB": "",
      "label": "юрта",
      "sub": "Традиционное кочевое жилище казахов · шанырак, кереге, уык",
      "desc": "Юрта — традиционное жилище кочевых казахов. Кереге, уык, шанырак — три основных элемента. Ни один гвоздь не используется — только дерево и войлок.",
      "facts": [
        [
          "Диаметр",
          "6–8 м"
        ],
        [
          "Уыков",
          "40–60"
        ],
        [
          "Опора",
          "шанырак"
        ],
        [
          "Материал",
          "войлок · дерево"
        ]
      ]
    },
    "en": {
      "cat": "Dwelling",
      "titleA": "Yurt",
      "titleB": "",
      "label": "yurt",
      "sub": "Traditional Kazakh nomadic dwelling · shanyrak, kerege, uyk",
      "desc": "The yurt is the traditional dwelling of nomadic Kazakhs. Kerege (lattice walls), uyk (roof poles) and shanyrak (crown ring) are the three main elements. Not a single nail is used — only wood and felt.",
      "facts": [
        [
          "Diameter",
          "6–8 m"
        ],
        [
          "Uyk poles",
          "40–60"
        ],
        [
          "Support",
          "shanyrak"
        ],
        [
          "Material",
          "felt · wood"
        ]
      ]
    }
  },
  "dombyra_by_sultan_elamanov": {
    "ru": {
      "cat": "Музыка",
      "titleA": "Домбра",
      "titleB": "",
      "label": "домбра · чёрное дерево",
      "sub": "Двухструнный щипковый инструмент · традиционный",
      "desc": "Домбра — душа казахского народа. Корпус из карагача или берёзы, струны — раньше из верблюжьих жил, позже из нити. Прикосновением пальцев кюйши инструмент передаёт звучание веков.",
      "facts": [
        [
          "Длина",
          "1 260 мм"
        ],
        [
          "Струны",
          "2 · нейлон"
        ],
        [
          "Лады",
          "19"
        ],
        [
          "Кюй",
          "3 отрывка · 07:40"
        ]
      ]
    },
    "en": {
      "cat": "Music",
      "titleA": "Dombra",
      "titleB": "",
      "label": "dombra · dark wood",
      "sub": "Two-string plucked instrument · traditional",
      "desc": "The dombra is the soul of the Kazakh people. Its body is carved from elm or birch, its strings once made of camel sinew, later of thread. At the touch of a kuishi's (master player's) fingers, it carries the sound of centuries.",
      "facts": [
        [
          "Length",
          "1,260 mm"
        ],
        [
          "Strings",
          "2 · nylon"
        ],
        [
          "Frets",
          "19"
        ],
        [
          "Kuy",
          "3 excerpts · 07:40"
        ]
      ]
    }
  },
  "kazakh_qobyz_kobyz": {
    "ru": {
      "cat": "Музыка",
      "titleA": "Кобыз",
      "titleB": "",
      "label": "кобыз · берёза",
      "sub": "Древний смычковый инструмент · спутник Коркыта",
      "desc": "Кобыз — инструмент Коркыт-ата. Полость, выдолбленная из дерева, обтянута козьей кожей. Две струны из конского волоса, смычок изогнут как лук. Его голос передаёт звучание человеческого голоса.",
      "facts": [
        [
          "Длина",
          "≈ 620 мм"
        ],
        [
          "Струны",
          "2 · конский волос"
        ],
        [
          "Материал",
          "берёза · козья кожа"
        ],
        [
          "Век",
          "IX–X вв."
        ]
      ]
    },
    "en": {
      "cat": "Music",
      "titleA": "Qobyz",
      "titleB": "",
      "label": "qobyz · birch",
      "sub": "Ancient bowed instrument · Korkyt's companion",
      "desc": "The qobyz is the instrument of Korkyt-ata. Its hollow body, carved from wood, is covered with goat hide. Two strings are drawn from horsehair, and the bow is curved like a hunting bow. Its voice carries the timbre of the human voice.",
      "facts": [
        [
          "Length",
          "≈ 620 mm"
        ],
        [
          "Strings",
          "2 · horsehair"
        ],
        [
          "Material",
          "birch · goat hide"
        ],
        [
          "Century",
          "9th–10th c."
        ]
      ]
    }
  },
  "kazakh_shapan": {
    "ru": {
      "cat": "Национальная одежда",
      "titleA": "Шапан",
      "titleB": "",
      "label": "шапан",
      "sub": "Длинная верхняя одежда · расшита золотой нитью и орнаментом",
      "desc": "Шапан — длинный верхний халат, который носят и мужчины, и женщины. Ткань: шёлк, бархат, шерсть. Край окантован тонкой нитью, петлями. Орнамент — «кошкар мюйиз» (бараний рог), «казтабан» (гусиная лапка).",
      "facts": [
        [
          "Длина",
          "≈ 130 см"
        ],
        [
          "Ткань",
          "шёлк · бархат"
        ],
        [
          "Орнамент",
          "бараний рог"
        ],
        [
          "Повод",
          "праздник · приём"
        ]
      ]
    },
    "en": {
      "cat": "National Clothing",
      "titleA": "Shapan",
      "titleB": "",
      "label": "shapan",
      "sub": "Long outer robe · trimmed with gold thread and ornament",
      "desc": "The shapan is a long outer robe worn by both men and women. Fabric: silk, velvet, wool. The hem is trimmed with fine thread and loop fastenings. The ornament features ram's-horn and goose-foot motifs.",
      "facts": [
        [
          "Length",
          "≈ 130 cm"
        ],
        [
          "Fabric",
          "silk · velvet"
        ],
        [
          "Ornament",
          "ram's horn"
        ],
        [
          "Occasion",
          "celebration · gathering"
        ]
      ]
    }
  },
  "taqiya_grey_m_kazakh_national_headdress": {
    "ru": {
      "cat": "Нац. одежда · головной убор",
      "titleA": "Тақия (муж.)",
      "titleB": "",
      "label": "тақия · мужская",
      "sub": "Лёгкий мужской головной убор · серый бархат",
      "desc": "Тақия — лёгкий головной убор для летнего сезона. Шьётся из бархата, шёлка. Отделан орнаментом и петлями, внутри — тонкий каркас.",
      "facts": [
        [
          "Диаметр",
          "≈ 190 мм"
        ],
        [
          "Материал",
          "серый бархат"
        ],
        [
          "Орнамент",
          "бараний рог"
        ],
        [
          "Сезон",
          "лето · весна"
        ]
      ]
    },
    "en": {
      "cat": "National Clothing · Headwear",
      "titleA": "Taqiya (men's)",
      "titleB": "",
      "label": "taqiya · men's",
      "sub": "Light men's skullcap · grey velvet",
      "desc": "The taqiya is a light summer skullcap. It is sewn from velvet or silk, trimmed with ornament and looped stitching, with a thin frame inside to hold its shape.",
      "facts": [
        [
          "Diameter",
          "≈ 190 mm"
        ],
        [
          "Material",
          "grey velvet"
        ],
        [
          "Ornament",
          "ram's horn"
        ],
        [
          "Season",
          "summer · spring"
        ]
      ]
    }
  },
  "taqiya_yellow_f_kazakh_traditional_headdress": {
    "ru": {
      "cat": "Нац. одежда · головной убор",
      "titleA": "Тақия (жен.)",
      "titleB": "",
      "label": "тақия · девичья",
      "sub": "Праздничный головной убор девушек · жёлтая парча",
      "desc": "Девичья тақия — яркий головной убор с золотой вышивкой, который надевают на той (праздник). Сверху крепится перо филина — символ юной девушки.",
      "facts": [
        [
          "Диаметр",
          "≈ 180 мм"
        ],
        [
          "Материал",
          "жёлтая ткань"
        ],
        [
          "Вышивка",
          "золото · бисер"
        ],
        [
          "Перо",
          "филин"
        ]
      ]
    },
    "en": {
      "cat": "National Clothing · Headwear",
      "titleA": "Taqiya (girl's)",
      "titleB": "",
      "label": "taqiya · girl's",
      "sub": "Festive girls' headwear · gold-trimmed yellow",
      "desc": "The girl's taqiya is a brightly coloured, gold-embroidered headdress worn at celebrations. An owl feather is fixed on top — a symbol of a young unmarried woman.",
      "facts": [
        [
          "Diameter",
          "≈ 180 mm"
        ],
        [
          "Material",
          "yellow fabric"
        ],
        [
          "Embroidery",
          "gold thread · beads"
        ],
        [
          "Feather",
          "owl"
        ]
      ]
    }
  },
  "saukele_ethno_variant_traditional_headdress": {
    "ru": {
      "cat": "Нац. одежда · головной убор",
      "titleA": "Саукеле",
      "titleB": "",
      "label": "саукеле · свадебный",
      "sub": "Свадебный головной убор невесты · высокий конус",
      "desc": "Саукеле — самый дорогой и торжественный головной убор, который казахская невеста надевает на свадьбу. Высота достигает 70 см. Украшен серебром, золотом, кораллами, лебединым пером.",
      "facts": [
        [
          "Высота",
          "≈ 70 см"
        ],
        [
          "Убранство",
          "серебро · золото"
        ],
        [
          "Камень",
          "коралл · агат"
        ],
        [
          "Повод",
          "свадьба"
        ]
      ]
    },
    "en": {
      "cat": "National Clothing · Headwear",
      "titleA": "Saukele",
      "titleB": "",
      "label": "saukele · ceremonial",
      "sub": "Bride's ceremonial headdress · tall cone",
      "desc": "The saukele is the most precious and ceremonial headdress a Kazakh bride wears at her wedding. It can reach up to 70 cm in height, adorned with silver, gold, coral and swan feathers.",
      "facts": [
        [
          "Height",
          "≈ 70 cm"
        ],
        [
          "Jewellery",
          "silver · gold"
        ],
        [
          "Stone",
          "coral · agate"
        ],
        [
          "Occasion",
          "wedding"
        ]
      ]
    }
  },
  "togyzqumalaq": {
    "ru": {
      "cat": "Национальная игра",
      "titleA": "Тогызкумалак",
      "titleB": "",
      "label": null,
      "sub": "Древняя логическая игра · доска, вырезанная из дерева",
      "desc": "Тогызкумалак — древняя казахская логическая игра. Деревянная доска с девятью лунками с каждой стороны. В центре — «казан», куда собираются выигранные шарики. Степные шахматы, развивающие ум и стратегическое мышление.",
      "facts": [
        [
          "Лунки",
          "2 × 9"
        ],
        [
          "Материал",
          "дерево"
        ],
        [
          "Казан",
          "2 (в центре)"
        ],
        [
          "Смысл",
          "ум · выдержка"
        ]
      ]
    },
    "en": {
      "cat": "National Game",
      "titleA": "Togyzqumalaq",
      "titleB": "",
      "label": null,
      "sub": "Ancient strategy game · carved wooden board",
      "desc": "Togyzqumalaq is an ancient Kazakh strategy game. A wooden board has nine pits on each side. In the centre is the qazan ('cauldron'), where won pebbles are collected. It is known as 'steppe chess', sharpening logic and strategy.",
      "facts": [
        [
          "Pits",
          "2 × 9"
        ],
        [
          "Material",
          "wood"
        ],
        [
          "Cauldron",
          "2 (centre)"
        ],
        [
          "Meaning",
          "mind · patience"
        ]
      ]
    }
  },
  "qamshy_kamshy": {
    "ru": {
      "cat": "Ремесло",
      "titleA": "Камча",
      "titleB": "",
      "label": "камча · плетение",
      "sub": "Плетёная кожаная камча · орудие табунщика",
      "desc": "Камча — знак в руке табунщика и батыра. Рукоять из дерева или рога, плетение — в восемь, шестнадцать прядей. Отделана орнаментом, серебряными накладками.",
      "facts": [
        [
          "Длина",
          "≈ 1 100 мм"
        ],
        [
          "Плетение",
          "8 · 16"
        ],
        [
          "Рукоять",
          "берёза · рог"
        ],
        [
          "Смысл",
          "статус · сила"
        ]
      ]
    },
    "en": {
      "cat": "Craft",
      "titleA": "Qamshy",
      "titleB": "",
      "label": "qamshy · braiding",
      "sub": "Braided leather whip · herdsman's tool",
      "desc": "The qamshy is a mark of status in the hand of a herdsman or batyr (warrior). The handle is wood or horn, the lash braided in eight or sixteen strands, trimmed with ornament and silver fittings.",
      "facts": [
        [
          "Length",
          "≈ 1,100 mm"
        ],
        [
          "Braid",
          "8 · 16"
        ],
        [
          "Handle",
          "birch · horn"
        ],
        [
          "Meaning",
          "status · strength"
        ]
      ]
    }
  },
  "sedlo": {
    "ru": {
      "cat": "Ремесло · конское снаряжение",
      "titleA": "Седло",
      "titleB": "",
      "label": null,
      "sub": "Традиционное казахское седло · пластины с позолотой",
      "desc": "Седло — спутник казахского воина. Деревянный каркас, обтянутый кожей, снаружи украшен позолоченными металлическими пластинами с ажурным орнаментом и вставками агата. XIX век. Западно-Казахстанский областной музей.",
      "facts": [
        [
          "Каркас",
          "дерево"
        ],
        [
          "Обшивка",
          "кожа"
        ],
        [
          "Убранство",
          "позолота · агат"
        ],
        [
          "Век",
          "XIX"
        ]
      ]
    },
    "en": {
      "cat": "Craft · Horse Tack",
      "titleA": "Saddle",
      "titleB": "",
      "label": null,
      "sub": "Traditional Kazakh saddle · gilded metal plates",
      "desc": "The saddle was the companion of the Kazakh warrior. A wooden frame covered in leather is decorated with gilded metal plates bearing openwork ornament and agate inlays. 19th century. West Kazakhstan Regional Museum.",
      "facts": [
        [
          "Frame",
          "wood"
        ],
        [
          "Cover",
          "leather"
        ],
        [
          "Decoration",
          "gilded metal · agate"
        ],
        [
          "Century",
          "19th"
        ]
      ]
    }
  },
  "saba": {
    "ru": {
      "cat": "Быт · сосуд",
      "titleA": "Саба",
      "titleB": "",
      "label": null,
      "sub": "Кожаный сосуд для кумыса · дно в форме трёх «рогов»",
      "desc": "Саба — кожаный сосуд для жидкости. Дно квадратное, в форме трёх «рогов», закрученных внутрь. Горловина достаточно широкая, пробка деревянная. Снаружи выштампован растительный орнамент. Актюбинский областной историко-краеведческий музей.",
      "facts": [
        [
          "Материал",
          "кожа · дерево"
        ],
        [
          "Дно",
          "три «рога»"
        ],
        [
          "Пробка",
          "дерево"
        ],
        [
          "Орнамент",
          "растительный"
        ]
      ]
    },
    "en": {
      "cat": "Household · Vessel",
      "titleA": "Saba",
      "titleB": "",
      "label": null,
      "sub": "Leather vessel for kumys · tri-horned base",
      "desc": "The saba is a leather vessel for liquids. Its base is square, shaped into three inward-curling 'horns'. The neck is wide, the stopper wooden. Plant ornament is stamped on the outer surface. Aktobe Regional History Museum.",
      "facts": [
        [
          "Material",
          "leather · wood"
        ],
        [
          "Base",
          "three horns"
        ],
        [
          "Stopper",
          "wood"
        ],
        [
          "Ornament",
          "floral"
        ]
      ]
    }
  },
  "astau_tabaq": {
    "ru": {
      "cat": "Быт · сосуд",
      "titleA": "Астау",
      "titleB": "",
      "label": null,
      "sub": "Большое резное деревянное блюдо · для дастархана",
      "desc": "Астау — традиционное большое деревянное блюдо казахов, вырезанное вручную. На него подают бешбармак, мясо, плов. Вырезается из берёзы или ивы, край украшен орнаментом. Центральное блюдо дастархана (праздничного стола).",
      "facts": [
        [
          "Материал",
          "берёза · ива"
        ],
        [
          "Диаметр",
          "500–800 мм"
        ],
        [
          "Орнамент",
          "бараний рог"
        ],
        [
          "Традиция",
          "бешбармак"
        ]
      ]
    },
    "en": {
      "cat": "Household · Vessel",
      "titleA": "Astau",
      "titleB": "",
      "label": null,
      "sub": "Large carved wooden tray · for the dastarkhan",
      "desc": "The astau is a traditional large hand-carved Kazakh wooden tray, used to serve beshbarmaq, meat or pilaf. Carved from birch or willow, its rim is decorated with ornament — the centrepiece of the dastarkhan (festive table).",
      "facts": [
        [
          "Material",
          "birch · willow"
        ],
        [
          "Diameter",
          "500–800 mm"
        ],
        [
          "Ornament",
          "ram's horn"
        ],
        [
          "Tradition",
          "beshbarmaq"
        ]
      ]
    }
  },
  "torsyk_kymyz": {
    "ru": {
      "cat": "Быт · сосуд",
      "titleA": "Торсык",
      "titleB": "",
      "label": null,
      "sub": "Кожаный сосуд для кумыса · с орнаментом «рог»",
      "desc": "Торсык — сосуд для хранения кумыса, сшитый из коричневой кожи. Две половины сшиты по краю мелким швом. По бокам вышит орнамент «рог», обведённый чёрным. Горловина узкая, пробка деревянная. Экспонат Западно-Казахстанского областного историко-краеведческого музея.",
      "facts": [
        [
          "Материал",
          "коричневая кожа"
        ],
        [
          "Пробка",
          "дерево"
        ],
        [
          "Орнамент",
          "рог"
        ],
        [
          "Музей",
          "Западный КО"
        ]
      ]
    },
    "en": {
      "cat": "Household · Vessel",
      "titleA": "Torsyq",
      "titleB": "",
      "label": null,
      "sub": "Leather kumys flask · with horn-motif ornament",
      "desc": "The torsyq is a vessel for storing kumys, stitched from brown leather. Two halves are joined along the edge with fine stitching. A 'horn' ornament is embroidered on the sides, outlined in black. The neck is narrow, the stopper wooden. An exhibit of the West Kazakhstan Regional History Museum.",
      "facts": [
        [
          "Material",
          "brown leather"
        ],
        [
          "Stopper",
          "wood"
        ],
        [
          "Ornament",
          "horn"
        ],
        [
          "Museum",
          "West KZ"
        ]
      ]
    }
  },
  "asyk": {
    "ru": {
      "cat": "Национальная игра",
      "titleA": "Асык",
      "titleB": "",
      "label": "овечья кость",
      "sub": "Изготовлен из овечьей кости · древняя игра",
      "desc": "Асык — древняя детская игра из овечьей коленной кости. Развивает ловкость и смекалку казахских детей. Положения кости: тайпак, шинкиль, кара, сака.",
      "facts": [
        [
          "Материал",
          "овечья кость"
        ],
        [
          "Вес",
          "15–20 г"
        ],
        [
          "Виды",
          "сака · алшы · бюк"
        ],
        [
          "Возраст",
          "1000+ лет"
        ]
      ]
    },
    "en": {
      "cat": "National Game",
      "titleA": "Asyq",
      "titleB": "",
      "label": "sheep's anklebone",
      "sub": "Made from a sheep's anklebone · ancient game",
      "desc": "Asyq is an ancient children's game played with a sheep's anklebone. It sharpens the skill and wit of Kazakh children. The bone's positions are named taipaq, shinkil, qara and saqa.",
      "facts": [
        [
          "Material",
          "sheep bone"
        ],
        [
          "Weight",
          "15–20 g"
        ],
        [
          "Types",
          "saqa · alshy · buk"
        ],
        [
          "Age",
          "1000+ years"
        ]
      ]
    }
  },
  "besik": {
    "ru": {
      "cat": "Быт · воспитание",
      "titleA": "Бесик",
      "titleB": "",
      "label": "бесик · берёза",
      "sub": "Традиционная казахская резная деревянная колыбель",
      "desc": "Бесик — детская колыбель, вырезанная из берёзы или ивы, украшенная орнаментом. «Бесикке салу» (укладывание в колыбель), «тусау кесер» (разрезание пут) — первые обряды младенца. Песни и обычаи матерей передаются из поколения в поколение.",
      "facts": [
        [
          "Материал",
          "берёза · ива"
        ],
        [
          "Длина",
          "≈ 700 мм"
        ],
        [
          "Орнамент",
          "бараний рог"
        ],
        [
          "Обряд",
          "бесикке салу"
        ]
      ]
    },
    "en": {
      "cat": "Household · Upbringing",
      "titleA": "Besik",
      "titleB": "",
      "label": "besik · birch",
      "sub": "Traditional Kazakh carved wooden cradle",
      "desc": "The besik is a child's cradle carved from birch or willow and decorated with ornament. 'Besikke salu' (first placing the baby in the cradle) and 'tusau kesu' (cutting the toddling ropes) are the infant's first rites. Mothers' lullabies and customs are passed down through generations.",
      "facts": [
        [
          "Material",
          "birch · willow"
        ],
        [
          "Length",
          "≈ 700 mm"
        ],
        [
          "Ornament",
          "ram's horn"
        ],
        [
          "Tradition",
          "besikke salu"
        ]
      ]
    }
  },
  "nomad_sabre": {
    "ru": {
      "cat": "Оружие",
      "titleA": "Сабля",
      "titleB": "",
      "label": "сталь · кость",
      "sub": "Клинковое оружие казахского воина",
      "desc": "Сабля — древнее клинковое оружие казахского воина. Клинок выкован из стали, рукоять — из дерева и кости. Ножны обтянуты кожей, украшены серебром и орнаментом.",
      "facts": [
        [
          "Длина",
          "≈ 900 мм"
        ],
        [
          "Вес",
          "≈ 1.2 кг"
        ],
        [
          "Клинок",
          "сталь"
        ],
        [
          "Рукоять",
          "кость · серебро"
        ]
      ]
    },
    "en": {
      "cat": "Weapon",
      "titleA": "Sabre",
      "titleB": "",
      "label": "steel · bone",
      "sub": "Bladed weapon of the Kazakh warrior",
      "desc": "The sabre is the ancient bladed weapon of the Kazakh warrior. The blade is forged from steel, the hilt made of wood and bone. The scabbard is leather-bound and adorned with silver and ornament.",
      "facts": [
        [
          "Length",
          "≈ 900 mm"
        ],
        [
          "Weight",
          "≈ 1.2 kg"
        ],
        [
          "Blade",
          "steel"
        ],
        [
          "Hilt",
          "bone · silver"
        ]
      ]
    }
  },
  "balbal_tas": {
    "ru": {
      "cat": "Древнее наследие · статуя",
      "titleA": "Балбал",
      "titleB": "",
      "label": "камень · тюркская эпоха",
      "sub": "Древнетюркское изваяние · памятник воину",
      "desc": "Балбал — памятник тюркской эпохи, каменное изваяние в форме человека. Устанавливался в честь прославленного, знатного человека. Вместе с покойным погребали одежду, оружие, коня. Прообраз современных надгробий.",
      "facts": [
        [
          "Век",
          "VI–VIII вв."
        ],
        [
          "Материал",
          "камень"
        ],
        [
          "Высота",
          "≈ 1.5 м"
        ],
        [
          "Функция",
          "памятник"
        ]
      ]
    },
    "en": {
      "cat": "Ancient Heritage · Statue",
      "titleA": "Balbal",
      "titleB": "",
      "label": "stone · Turkic era",
      "sub": "Ancient Turkic statue · warrior's memorial",
      "desc": "The balbal is a Turkic-era monument — a stone figure carved in human form. It was erected to honour a renowned or noble person. Clothing, weapons and a horse were buried with the deceased. It is the forerunner of today's grave markers.",
      "facts": [
        [
          "Century",
          "6th–8th c."
        ],
        [
          "Material",
          "stone"
        ],
        [
          "Height",
          "≈ 1.5 m"
        ],
        [
          "Function",
          "memorial"
        ]
      ]
    }
  },
  "tamgaly_sun_man": {
    "ru": {
      "cat": "Древнее наследие · петроглиф",
      "titleA": "Солнцеголовый",
      "titleB": "",
      "label": "петроглиф · камень",
      "sub": "Петроглиф урочища Тамгалы · бронзовый век",
      "desc": "«Солнцеголовый человек» на скалах Тамгалы — знаменитый петроглиф бронзового века. Изображение бога Солнца, свидетель шаманских обрядов. Объект Всемирного наследия ЮНЕСКО (2004).",
      "facts": [
        [
          "Век",
          "XIV–XI вв. до н.э."
        ],
        [
          "Место",
          "Алматинская обл."
        ],
        [
          "ЮНЕСКО",
          "2004"
        ],
        [
          "Стиль",
          "петроглиф"
        ]
      ]
    },
    "en": {
      "cat": "Ancient Heritage · Petroglyph",
      "titleA": "Sun-Headed Man",
      "titleB": "",
      "label": "petroglyph · stone",
      "sub": "Petroglyph of Tamgaly · Bronze Age",
      "desc": "The 'sun-headed man' at Tamgaly is a famous Bronze Age petroglyph — a depiction of a sun deity and witness to shamanic rites. UNESCO World Heritage Site (2004).",
      "facts": [
        [
          "Century",
          "14th–11th c. BC"
        ],
        [
          "Location",
          "Almaty Region"
        ],
        [
          "UNESCO",
          "2004"
        ],
        [
          "Style",
          "petroglyph"
        ]
      ]
    }
  },
  "aibalta": {
    "ru": {
      "cat": "Оружие",
      "titleA": "Айбалта",
      "titleB": "",
      "label": null,
      "sub": "Боевой топор с серебряной рукоятью · XIX в.",
      "desc": "Айбалта — боевое оружие казахского воина. Рукоять обшита серебром, лезвие в форме полумесяца. Отличительный знак батыра, использовалось и в бою, и на торжествах. Западно-Казахстанский областной музей.",
      "facts": [
        [
          "Рукоять",
          "обшита серебром"
        ],
        [
          "Лезвие",
          "полумесяц"
        ],
        [
          "Век",
          "XIX"
        ],
        [
          "Применение",
          "бой · церемония"
        ]
      ]
    },
    "en": {
      "cat": "Weapon",
      "titleA": "Aibalta",
      "titleB": "",
      "label": null,
      "sub": "War axe with silver-clad haft · 19th c.",
      "desc": "The aibalta was a Kazakh warrior's battle weapon. Its haft is clad in silver, the blade shaped like a crescent moon. A mark of distinction for a batyr, used both in battle and at ceremonies. West Kazakhstan Regional Museum.",
      "facts": [
        [
          "Haft",
          "silver-clad"
        ],
        [
          "Blade",
          "crescent"
        ],
        [
          "Century",
          "19th"
        ],
        [
          "Use",
          "battle · ceremony"
        ]
      ]
    }
  },
  "qalqan": {
    "ru": {
      "cat": "Оружие",
      "titleA": "Щит",
      "titleB": "",
      "label": null,
      "sub": "Стальной щит · с латунной окантовкой · XVIII в.",
      "desc": "Щит — защитное оружие воина. Изготовлен из выпуклого стального листа, край окантован латунными пластинами. Снаружи — изображения людей, коней, животных и надписи в куфическом стиле. Внутренняя сторона обшита красной тканью и кожей. Национальный музей.",
      "facts": [
        [
          "Материал",
          "сталь · латунь"
        ],
        [
          "Диаметр",
          "≈ 50 см"
        ],
        [
          "Век",
          "XVIII"
        ],
        [
          "Орнамент",
          "куфи · животные"
        ]
      ]
    },
    "en": {
      "cat": "Weapon",
      "titleA": "Shield",
      "titleB": "",
      "label": null,
      "sub": "Steel shield · brass-rimmed · 18th c.",
      "desc": "The shield is a warrior's defensive weapon. It is made from a convex steel sheet, its rim trimmed with brass plates. The outer face bears images of people, horses and animals along with inscriptions in Kufic script. The inner side is lined with red fabric and leather. National Museum.",
      "facts": [
        [
          "Material",
          "steel · brass"
        ],
        [
          "Diameter",
          "≈ 50 cm"
        ],
        [
          "Century",
          "18th"
        ],
        [
          "Ornament",
          "Kufic · animals"
        ]
      ]
    }
  },
  "kubi": {
    "ru": {
      "cat": "Быт · сосуд",
      "titleA": "Кюби",
      "titleB": "",
      "label": null,
      "sub": "Деревянный сосуд для сквашивания кумыса · трапециевидный",
      "desc": "Кюби — трапециевидный сосуд для приготовления кумыса. Изготовлен из тонких сосновых дощечек, скреплён тремя чёрными металлическими обручами. Внутри — писпек, деревянная мутовка для взбивания кумыса. Акмолинский областной музей.",
      "facts": [
        [
          "Материал",
          "сосна"
        ],
        [
          "Высота",
          "≈ 75 см"
        ],
        [
          "Диаметр",
          "16–25 см"
        ],
        [
          "Внутри",
          "мутовка 93 см"
        ]
      ]
    },
    "en": {
      "cat": "Household · Vessel",
      "titleA": "Kubi",
      "titleB": "",
      "label": null,
      "sub": "Wooden churn for fermenting kumys · trapezoid shape",
      "desc": "The kubi is a trapezoid vessel for making kumys. It is built from thin pine staves bound with three black metal hoops. Inside is a pispek — a wooden churning staff used to stir the kumys. Akmola Regional Museum.",
      "facts": [
        [
          "Material",
          "pine"
        ],
        [
          "Height",
          "≈ 75 cm"
        ],
        [
          "Diameter",
          "16–25 cm"
        ],
        [
          "Contains",
          "93 cm churn-staff"
        ]
      ]
    }
  },
  "ojau": {
    "ru": {
      "cat": "Быт · сосуд",
      "titleA": "Ожау",
      "titleB": "",
      "label": null,
      "sub": "Резной деревянный ковш для разлива кумыса · нач. XX в.",
      "desc": "Ожау — деревянный ковш для разлива кумыса. Вырезается из цельного куска дерева, ручка длинная, удобная для захвата. Длина 41,5 см, ширина 14,8 см. Акмолинский областной музей, начало XX века.",
      "facts": [
        [
          "Материал",
          "дерево"
        ],
        [
          "Длина",
          "41.5 см"
        ],
        [
          "Ширина",
          "14.8 см"
        ],
        [
          "Век",
          "нач. XX"
        ]
      ]
    },
    "en": {
      "cat": "Household · Vessel",
      "titleA": "Ojau",
      "titleB": "",
      "label": null,
      "sub": "Carved wooden ladle for pouring kumys · early 20th c.",
      "desc": "The ojau is a wooden ladle for pouring kumys. It is carved from a single piece of wood with a long, easy-to-grip handle. Length 41.5 cm, width 14.8 cm. Akmola Regional Museum, early 20th century.",
      "facts": [
        [
          "Material",
          "wood"
        ],
        [
          "Length",
          "41.5 cm"
        ],
        [
          "Width",
          "14.8 cm"
        ],
        [
          "Century",
          "early 20th"
        ]
      ]
    }
  },
  "sandyq": {
    "ru": {
      "cat": "Быт · мебель",
      "titleA": "Сандык",
      "titleB": "",
      "label": null,
      "sub": "Традиционный казахский сундук · с золотой отделкой",
      "desc": "Сандык — деревянный сундук для хранения ценных вещей, вышивок, одежды казахской семьи. Снаружи обшит металлом, украшен орнаментом. Особое место занимает в приданом невесты — на свадьбе произносят пожелание «сандык толы» (полного сундука).",
      "facts": [
        [
          "Материал",
          "дерево · металл"
        ],
        [
          "Функция",
          "хранение"
        ],
        [
          "Традиция",
          "приданое"
        ],
        [
          "Орнамент",
          "растительный · геометрия"
        ]
      ]
    },
    "en": {
      "cat": "Household · Furniture",
      "titleA": "Sandyq",
      "titleB": "",
      "label": null,
      "sub": "Traditional Kazakh chest · gold-trimmed",
      "desc": "The sandyq is a wooden chest for storing a Kazakh family's valuables, embroidery and clothing. It is clad in metal and decorated with ornament. It holds special significance in a bride's dowry — at weddings, the blessing 'sandyq toly' ('may your chest be full') is spoken.",
      "facts": [
        [
          "Material",
          "wood · metal"
        ],
        [
          "Purpose",
          "storage"
        ],
        [
          "Tradition",
          "dowry"
        ],
        [
          "Ornament",
          "floral · geometric"
        ]
      ]
    }
  },
  "sazsyrnai": {
    "ru": {
      "cat": "Музыка · духовой",
      "titleA": "Сазсырнай",
      "titleB": "",
      "label": null,
      "sub": "Древний глиняный духовой инструмент · «Туркестан 1500»",
      "desc": "Сазсырнай — духовой инструмент, обожжённый из глины. Форма — большое яйцо, 12 звуковых отверстий. На лицевой стороне — изображение мавзолея Ходжи Ахмеда Ясави и каравана верблюдов, надпись «Туркестан 1500». Национальный музей.",
      "facts": [
        [
          "Материал",
          "глина"
        ],
        [
          "Отверстия",
          "12"
        ],
        [
          "Форма",
          "яйцо"
        ],
        [
          "Размер",
          "12 × 5 см"
        ]
      ]
    },
    "en": {
      "cat": "Music · Wind",
      "titleA": "Sazsyrnai",
      "titleB": "",
      "label": null,
      "sub": "Ancient clay wind instrument · 'Turkestan 1500'",
      "desc": "The sazsyrnai is a wind instrument fired from clay. Shaped like a large egg, it has 12 sound holes. Its front bears an image of the Mausoleum of Khoja Ahmed Yasawi and a camel caravan, with the inscription 'Turkestan 1500'. National Museum.",
      "facts": [
        [
          "Material",
          "clay"
        ],
        [
          "Holes",
          "12"
        ],
        [
          "Shape",
          "egg"
        ],
        [
          "Size",
          "12 × 5 cm"
        ]
      ]
    }
  },
  "shanqobyz": {
    "ru": {
      "cat": "Музыка · язычковый",
      "titleA": "Шанкобыз",
      "titleB": "",
      "label": null,
      "sub": "Древний язычковый инструмент · в деревянном футляре",
      "desc": "Шанкобыз — древний язычковый инструмент. Состоит из плоской металлической пластины с сужающимися концами и петлёй на конце. Деревянный футляр трапециевидной формы, с ручками и отверстием для шнурка. При игре ротовая полость служит резонатором. Акмолинский ОМ.",
      "facts": [
        [
          "Язычок",
          "металл"
        ],
        [
          "Футляр",
          "дерево"
        ],
        [
          "Техника",
          "резьба · аппликация"
        ],
        [
          "Дата",
          "2015"
        ]
      ]
    },
    "en": {
      "cat": "Music · Reed",
      "titleA": "Shan-qobyz",
      "titleB": "",
      "label": null,
      "sub": "Ancient metal jaw harp · in a wooden case",
      "desc": "The shan-qobyz is an ancient reed instrument, made of a flat metal plate with tapering ends and a loop at the tip. Its trapezoid wooden case has handles and a hole for a cord. When played, the mouth cavity acts as a resonator. Akmola Regional Museum.",
      "facts": [
        [
          "Reed",
          "metal"
        ],
        [
          "Case",
          "wood"
        ],
        [
          "Technique",
          "carving · appliqué"
        ],
        [
          "Date",
          "2015"
        ]
      ]
    }
  },
  "perstenj": {
    "ru": {
      "cat": "Ювелирика · кольцо",
      "titleA": "Клювовидное",
      "titleB": "кольцо",
      "label": null,
      "sub": "«Птичий клюв» · серебро, скань-зернь · XIX в.",
      "desc": "Кольцо с овальным кастом с заострённым концом, в котором закреплён небольшой камень. Каст украшен рельефным рисунком в технике скани и зерни. На лицевой стороне — плетёный орнамент-косичка, в центре — завитки из зерни. Костанайский областной музей.",
      "facts": [
        [
          "Материал",
          "серебро"
        ],
        [
          "Техника",
          "скань · зернь"
        ],
        [
          "Форма",
          "овал · заострённая"
        ],
        [
          "Век",
          "XIX"
        ]
      ]
    },
    "en": {
      "cat": "Jewellery · Ring",
      "titleA": "Beak-Shaped",
      "titleB": "Ring",
      "label": null,
      "sub": "'Bird's beak' · silver, filigree-granulation · 19th c.",
      "desc": "A ring with an oval, pointed-tip bezel holding a small stone. The bezel is decorated with a relief pattern using filigree and granulation. Its face bears a braided cord ornament, with granulated spirals at the centre. Kostanay Regional Museum.",
      "facts": [
        [
          "Material",
          "silver"
        ],
        [
          "Technique",
          "filigree · granulation"
        ],
        [
          "Shape",
          "oval · pointed"
        ],
        [
          "Century",
          "19th"
        ]
      ]
    }
  },
  "bilezik": {
    "ru": {
      "cat": "Ювелирика · браслет",
      "titleA": "Браслет",
      "titleB": "",
      "label": null,
      "sub": "Массивный открытый браслет · с тремя агатами",
      "desc": "Массивный браслет с небольшим разрывом. Поверхность украшена геометрическим орнаментом. Центральный акцент — три овальных агата, расположенных равномерно по кругу. Камни закреплены в выступающих оправах. Автор — Шапабаев Кайрат Булатович. Музей им. Шаймардана Сариева.",
      "facts": [
        [
          "Материал",
          "серебро · агат"
        ],
        [
          "Орнамент",
          "геометрия"
        ],
        [
          "Камни",
          "3 · агат"
        ],
        [
          "Автор",
          "К. Шапабаев"
        ]
      ]
    },
    "en": {
      "cat": "Jewellery · Bracelet",
      "titleA": "Bracelet",
      "titleB": "",
      "label": null,
      "sub": "Massive open bracelet · with three agates",
      "desc": "A massive open-ended bracelet. Its surface is decorated with geometric ornament. Three oval agates, evenly spaced around the band, form the central accent, set in raised mounts. Author: Kairat Bulatovich Shapabayev. Shaimardan Sariyev Museum.",
      "facts": [
        [
          "Material",
          "silver · agate"
        ],
        [
          "Ornament",
          "geometric"
        ],
        [
          "Stones",
          "3 · agate"
        ],
        [
          "Author",
          "K. Shapabayev"
        ]
      ]
    }
  },
  "kese": {
    "ru": {
      "cat": "Быт · сосуд",
      "titleA": "Пиала",
      "titleB": "",
      "label": null,
      "sub": "Керамическая пиала · с синим и коричневым узором · XVIII–XIX вв.",
      "desc": "Внутренняя поверхность богато украшена коричневым и голубым орнаментом на белом фоне. Керамика, гончарный круг, обжиг. Высота 8 см, диаметр венчика 20,4 см. Историко-культурный комплекс «Шым-кала».",
      "facts": [
        [
          "Материал",
          "керамика"
        ],
        [
          "Высота",
          "8.2 см"
        ],
        [
          "Диаметр",
          "20.4 см"
        ],
        [
          "Век",
          "XVIII–XIX"
        ]
      ]
    },
    "en": {
      "cat": "Household · Vessel",
      "titleA": "Kese Bowl",
      "titleB": "",
      "label": null,
      "sub": "Ceramic bowl · blue-and-brown pattern · 18th–19th c.",
      "desc": "The interior is richly decorated with brown and blue ornament on a white ground. Ceramic, thrown on a potter's wheel and fired. Height 8 cm, rim diameter 20.4 cm. 'Shym-qala' historical and cultural complex.",
      "facts": [
        [
          "Material",
          "ceramic"
        ],
        [
          "Height",
          "8.2 cm"
        ],
        [
          "Diameter",
          "20.4 cm"
        ],
        [
          "Century",
          "18th–19th"
        ]
      ]
    }
  },
  "korzhyn": {
    "ru": {
      "cat": "Быт · сумка",
      "titleA": "Коржын",
      "titleB": "",
      "label": null,
      "sub": "Парная переметная сумка · ручное ткачество с ковровым узором",
      "desc": "Коржын — традиционная дорожная сумка кочевых казахов. Парный мешок, перекидываемый через спину лошади или верблюда. Соткан из тёмно-красной шерстяной нити, в центре — ромбовидный медальон, вокруг — цветочный орнамент. Края украшены шерстяными кистями. Национальный музей Республики Казахстан.",
      "facts": [
        [
          "Материал",
          "шерстяная нить"
        ],
        [
          "Техника",
          "ручное ткачество"
        ],
        [
          "Датировка",
          "XIX–XX вв."
        ],
        [
          "Убранство",
          "орнамент · медальон · кисти"
        ]
      ]
    },
    "en": {
      "cat": "Household · Bag",
      "titleA": "Korzhyn",
      "titleB": "",
      "label": null,
      "sub": "Paired saddlebag · hand-woven carpet ornament",
      "desc": "The korzhyn is the traditional travel bag of nomadic Kazakhs — a pair of pouches slung across a horse's or camel's back. Woven from deep red wool thread, it bears a diamond-shaped medallion at the centre surrounded by floral ornament. Its ends are finished with wool tassels. National Museum of the Republic of Kazakhstan.",
      "facts": [
        [
          "Material",
          "wool thread"
        ],
        [
          "Technique",
          "hand-woven"
        ],
        [
          "Made",
          "19th–20th c."
        ],
        [
          "Detail",
          "ornament · medallion · tassels"
        ]
      ]
    }
  },
  "syrmaq": {
    "ru": {
      "cat": "Быт · ковёр",
      "titleA": "Сырмак",
      "titleB": "",
      "label": null,
      "sub": "Традиционный войлочный ковёр · техника мозаичной аппликации · три медальона",
      "desc": "Сырмак — традиционный казахский войлочный ковёр. Изготавливается методом мозаики: цветные куски войлока вырезают и сшивают между собой. Три ромбовидных медальона, вокруг — растительный мотив и орнамент «бараний рог». Национальный музей Республики Казахстан.",
      "facts": [
        [
          "Материал",
          "войлок (овечья шерсть)"
        ],
        [
          "Техника",
          "мозаичная аппликация"
        ],
        [
          "Цвет",
          "коричневый · белый · лиловый"
        ],
        [
          "Убранство",
          "3 медальона + кайма"
        ]
      ]
    },
    "en": {
      "cat": "Household · Carpet",
      "titleA": "Syrmaq",
      "titleB": "",
      "label": null,
      "sub": "Traditional felt carpet · mosaic-appliqué technique · three medallions",
      "desc": "The syrmaq is a traditional Kazakh felt carpet, made using a mosaic technique — coloured pieces of felt are cut out and stitched together. It features three diamond-shaped medallions surrounded by plant motifs and ram's-horn ornament. National Museum of the Republic of Kazakhstan.",
      "facts": [
        [
          "Material",
          "felt (sheep wool)"
        ],
        [
          "Technique",
          "mosaic appliqué"
        ],
        [
          "Colour",
          "brown · white · purple"
        ],
        [
          "Detail",
          "3 medallions + border"
        ]
      ]
    }
  },
  "dulyga": {
    "ru": {
      "cat": "Оружие · шлем",
      "titleA": "Дулыга",
      "titleB": "",
      "label": null,
      "sub": "Железный шлем с бармицей · защитный убор казахского воина",
      "desc": "Дулыга — железный защитный шлем казахского воина. Реконструкция выполнена современным мастером Алибаем Бериком Сатынбекулы по образцам XVIII-XIX веков. Куполовидная форма, наверху — острый металлический шпиль, налобная пластина, снизу — бармица (кольчужная сетка), сплетённая из тонких железных колец. Снаружи — орнамент в арабском каллиграфическом стиле. Музей декоративно-прикладного искусства им. Шаймардана Сариева.",
      "facts": [
        [
          "Материал",
          "железо + кожа"
        ],
        [
          "Автор",
          "Берик Алибай"
        ],
        [
          "Оригинал",
          "XVIII-XIX вв."
        ],
        [
          "Части",
          "купол + бармица + орнамент"
        ]
      ]
    },
    "en": {
      "cat": "Weapon · Helmet",
      "titleA": "Dulyga",
      "titleB": "",
      "label": null,
      "sub": "Iron helmet with mail aventail · Kazakh warrior's protective headgear",
      "desc": "The dulyga is the iron protective helmet of a Kazakh warrior. This reconstruction was forged by the contemporary master Alibai Berik Satynbekuly, based on 18th–19th-century originals. It has a domed shape with a pointed metal spike on top, a brow plate, and below it a mail aventail woven from thin iron rings to guard the neck. The exterior bears ornament in Arabic calligraphic style. Shaimardan Sariyev Museum of Decorative and Applied Art.",
      "facts": [
        [
          "Material",
          "iron + leather"
        ],
        [
          "Author",
          "Berik Alibai"
        ],
        [
          "Original",
          "18th-19th c."
        ],
        [
          "Parts",
          "dome + mail + ornament"
        ]
      ]
    }
  }
};

const META_I18N = {
  "yurt_low_quality_texture": {
    "ru": {
      "action": "3D-тур →",
      "quiz": "Викторина: что означает шанырак?",
      "qrTitle": "Виртуальная экскурсия",
      "qrText": "Отсканируйте QR, чтобы войти внутрь юрты и рассмотреть кереге, уык, шанырак вблизи."
    },
    "en": {
      "action": "3D tour →",
      "quiz": "Quiz: what does the shanyrak mean?",
      "qrTitle": "Virtual tour",
      "qrText": "Scan the QR code to step inside the yurt and examine the kerege, uyk and shanyrak up close."
    }
  },
  "dombyra_by_sultan_elamanov": {
    "ru": {
      "action": "Слушать кюй →",
      "quiz": "Викторина: кто автор кюя «Балбырауын»?",
      "qrTitle": "Архив кюев",
      "qrText": "Отсканируйте QR, чтобы свободно послушать отрывки Курмангазы, Даулеткерея, Таттимбета."
    },
    "en": {
      "action": "Listen to the kuy →",
      "quiz": "Quiz: who composed the kuy 'Balbyrauyn'?",
      "qrTitle": "Kuy archive",
      "qrText": "Scan the QR code to freely listen to excerpts by Kurmangazy, Dauletkerei and Tattimbet."
    }
  },
  "kazakh_qobyz_kobyz": {
    "ru": {
      "action": "Слушать кюй Коркыта →",
      "quiz": "Викторина: кто считается отцом кобыза?",
      "qrTitle": "Голос баксы",
      "qrText": "Отсканируйте QR, чтобы послушать кюй Коркыта «Жер бауыры» и образцы традиционной школы кобыза."
    },
    "en": {
      "action": "Listen to Korkyt's kuy →",
      "quiz": "Quiz: who is regarded as the father of the qobyz?",
      "qrTitle": "Voice of the baqsy",
      "qrText": "Scan the QR code to listen to Korkyt's kuy 'Zher Bauyry' and examples of the traditional qobyz school."
    }
  },
  "kazakh_shapan": {
    "ru": {
      "action": "Изучить орнамент →",
      "quiz": "Викторина: из каких тканей шьют шапан?",
      "qrTitle": "Традиционный пошив",
      "qrText": "Отсканируйте QR, чтобы увидеть технику пошива шапана и узоры «казтабан», «бараний рог»."
    },
    "en": {
      "action": "Explore the ornament →",
      "quiz": "Quiz: what fabrics is a shapan sewn from?",
      "qrTitle": "Traditional tailoring",
      "qrText": "Scan the QR code to see the shapan-sewing technique and the goose-foot and ram's-horn ornament patterns."
    }
  },
  "taqiya_grey_m_kazakh_national_headdress": {
    "ru": {
      "action": "Галерея орнаментов →",
      "quiz": "Викторина: в какой сезон носят мужскую тақия?",
      "qrTitle": "Виды головных уборов",
      "qrText": "Отсканируйте QR, чтобы увидеть галерею региональных мужских тақия и их особенности."
    },
    "en": {
      "action": "Ornament gallery →",
      "quiz": "Quiz: in what season is a men's taqiya worn?",
      "qrTitle": "Types of headwear",
      "qrText": "Scan the QR code to see a gallery of regional men's taqiya and their distinctive features."
    }
  },
  "taqiya_yellow_f_kazakh_traditional_headdress": {
    "ru": {
      "action": "Праздничные уборы →",
      "quiz": "Викторина: что крепится поверх девичьей тақия?",
      "qrTitle": "Венец девушки",
      "qrText": "Отсканируйте QR, чтобы изучить виды девичьей тақия и традицию крепления пера филина."
    },
    "en": {
      "action": "Festive headwear →",
      "quiz": "Quiz: what is fixed on top of a girl's taqiya?",
      "qrTitle": "A girl's crown",
      "qrText": "Scan the QR code to explore the types of girl's taqiya and the tradition of fixing an owl feather."
    }
  },
  "saukele_ethno_variant_traditional_headdress": {
    "ru": {
      "action": "Свадебный обряд →",
      "quiz": "Викторина: сколько лет носят саукеле?",
      "qrTitle": "Торжественный убор",
      "qrText": "Отсканируйте QR, чтобы увидеть коллекцию саукеле Национального музея и жемчужно-серебряные украшения."
    },
    "en": {
      "action": "Wedding ceremony →",
      "quiz": "Quiz: for how many years is the saukele worn?",
      "qrTitle": "Ceremonial headdress",
      "qrText": "Scan the QR code to see the National Museum's saukele collection and its pearl-and-silver adornments."
    }
  },
  "qamshy_kamshy": {
    "ru": {
      "action": "Мастерство плетения →",
      "quiz": "Викторина: сколько прядей максимум в плетении камчи?",
      "qrTitle": "Виды плетения",
      "qrText": "Отсканируйте QR, чтобы увидеть технику плетения камчи в 8, 16, 32 пряди."
    },
    "en": {
      "action": "Braiding craftsmanship →",
      "quiz": "Quiz: what is the maximum number of strands in a qamshy braid?",
      "qrTitle": "Types of braiding",
      "qrText": "Scan the QR code to see the qamshy braiding technique in 8, 16 and 32 strands."
    }
  },
  "Asyk": {
    "ru": {
      "action": "Правила игры →",
      "quiz": "Викторина: как называется положение асыка «сака»?",
      "qrTitle": "Игры с асыком",
      "qrText": "Отсканируйте QR, чтобы изучить правила игр «Хан талапай», «Атбакыл», «Бес тас»."
    },
    "en": {
      "action": "Game rules →",
      "quiz": "Quiz: which position of the asyq is called 'saqa'?",
      "qrTitle": "Asyq games",
      "qrText": "Scan the QR code to learn the rules of 'Khan Talapai', 'Atbaqyl' and 'Bes Tas'."
    }
  },
  "besik": {
    "ru": {
      "action": "Обряд «бесикке салу» →",
      "quiz": "Викторина: когда младенца кладут в бесик?",
      "qrTitle": "Колыбельные песни",
      "qrText": "Отсканируйте QR, чтобы услышать «Әлди-әлди», обряд «тусау кесер» и традиционные колыбельные."
    },
    "en": {
      "action": "'Besikke salu' ritual →",
      "quiz": "Quiz: when is a baby first placed in the besik?",
      "qrTitle": "Cradle songs",
      "qrText": "Scan the QR code to hear 'Aldi-aldi', the 'tusau kesu' rite and traditional lullabies."
    }
  },
  "nomad_sabre": {
    "ru": {
      "action": "Легенды батыров →",
      "quiz": "Викторина: из чего сделан клинок сабли?",
      "qrTitle": "Летопись войны",
      "qrText": "Отсканируйте QR, чтобы увидеть искусство владения саблей батыров Кабанбая, Богенбая, Наурызбая."
    },
    "en": {
      "action": "Legends of the batyrs →",
      "quiz": "Quiz: what is the sabre's blade made of?",
      "qrTitle": "Chronicle of war",
      "qrText": "Scan the QR code to see the sabre swordsmanship of the batyrs Kabanbay, Bogenbai and Nauryzbai."
    }
  },
  "balbal_tas": {
    "ru": {
      "action": "Тюркская культура →",
      "quiz": "Викторина: кому устанавливали балбал?",
      "qrTitle": "Древнетюркское наследие",
      "qrText": "Отсканируйте QR, чтобы познакомиться с памятниками Культегину, Тонъюкуку и легендами о балбалах."
    },
    "en": {
      "action": "Turkic culture →",
      "quiz": "Quiz: who were balbal stones erected for?",
      "qrTitle": "Ancient Turkic heritage",
      "qrText": "Scan the QR code to explore the monuments to Kultegin and Tonyukuk and the legends of balbal stones."
    }
  },
  "tamgaly_sun_man": {
    "ru": {
      "action": "Путешествие в Тамгалы →",
      "quiz": "Викторина: когда созданы петроглифы Тамгалы?",
      "qrTitle": "Наследие ЮНЕСКО",
      "qrText": "Отсканируйте QR, чтобы увидеть 3D-тур по скалам Тамгалы и другим памятникам петроглифов."
    },
    "en": {
      "action": "Journey to Tamgaly →",
      "quiz": "Quiz: when were the Tamgaly petroglyphs created?",
      "qrTitle": "UNESCO heritage",
      "qrText": "Scan the QR code to take a 3D tour of the Tamgaly rocks and other petroglyph sites."
    }
  },
  "astau_tabaq": {
    "ru": {
      "action": "Традиция дастархана →",
      "quiz": "Викторина: какое блюдо подают на астау?",
      "qrTitle": "Дастархан",
      "qrText": "Отсканируйте QR, чтобы увидеть обряд подачи бешбармака, казы, плова на астау."
    },
    "en": {
      "action": "Dastarkhan tradition →",
      "quiz": "Quiz: what dish is served on the astau?",
      "qrTitle": "Dastarkhan",
      "qrText": "Scan the QR code to see the ritual of serving beshbarmaq, qazy and pilaf on the astau."
    }
  },
  "torsyk_kymyz": {
    "ru": {
      "action": "История кумыса →",
      "quiz": "Викторина: какой напиток хранили в торсыке?",
      "qrTitle": "Культура кумыса",
      "qrText": "Отсканируйте QR, чтобы увидеть традицию сквашивания, приготовления и хранения кумыса в торсыке."
    },
    "en": {
      "action": "History of kumys →",
      "quiz": "Quiz: what drink was stored in the torsyq?",
      "qrTitle": "Kumys culture",
      "qrText": "Scan the QR code to see the tradition of fermenting, preparing and storing kumys in the torsyq."
    }
  },
  "sedlo": {
    "ru": {
      "action": "Конское снаряжение →",
      "quiz": "Викторина: из каких частей состоит седло?",
      "qrTitle": "Конское снаряжение",
      "qrText": "Отсканируйте QR, чтобы увидеть виды казахских сёдел и их региональные особенности."
    },
    "en": {
      "action": "Horse tack →",
      "quiz": "Quiz: what parts make up a saddle?",
      "qrTitle": "Horse tack",
      "qrText": "Scan the QR code to see the types of Kazakh saddles and their regional features."
    }
  },
  "aibalta": {
    "ru": {
      "action": "Оружие батыров →",
      "quiz": "Викторина: какой формы лезвие айбалты?",
      "qrTitle": "Тюркское оружейное искусство",
      "qrText": "Отсканируйте QR, чтобы увидеть древнетюркское оружие и исторические виды айбалты."
    },
    "en": {
      "action": "Weapons of the batyrs →",
      "quiz": "Quiz: what shape is the aibalta's blade?",
      "qrTitle": "Turkic weapon craft",
      "qrText": "Scan the QR code to see ancient Turkic weapons and historical variants of the aibalta."
    }
  },
  "qalqan": {
    "ru": {
      "action": "Куфическая вязь →",
      "quiz": "Викторина: из какого металла край щита?",
      "qrTitle": "Древняя защита",
      "qrText": "Отсканируйте QR, чтобы изучить коллекцию щитов Национального музея и значение куфических надписей."
    },
    "en": {
      "action": "Kufic script →",
      "quiz": "Quiz: what metal trims the shield's rim?",
      "qrTitle": "Ancient protection",
      "qrText": "Scan the QR code to explore the National Museum's shield collection and the meaning of Kufic inscriptions."
    }
  },
  "kubi": {
    "ru": {
      "action": "Мутовка для кумыса →",
      "quiz": "Викторина: сколькими металлическими обручами скреплён кюби?",
      "qrTitle": "Традиционный кюби",
      "qrText": "Отсканируйте QR, чтобы увидеть пропорции сквашивания кумыса в кюби и движения мутовки."
    },
    "en": {
      "action": "Kumys churn-staff →",
      "quiz": "Quiz: how many metal hoops bind the kubi?",
      "qrTitle": "Traditional kubi",
      "qrText": "Scan the QR code to see the kumys-fermenting proportions and the churn-staff's motion in the kubi."
    }
  },
  "ojau": {
    "ru": {
      "action": "Обычай дастархана →",
      "quiz": "Викторина: для чего используется ожау?",
      "qrTitle": "Традиционная посуда",
      "qrText": "Отсканируйте QR, чтобы увидеть виды деревянной посуды — ожау, аяк, тегене, кесе."
    },
    "en": {
      "action": "Dastarkhan custom →",
      "quiz": "Quiz: what is the ojau used for?",
      "qrTitle": "Traditional vessels",
      "qrText": "Scan the QR code to see the types of wooden vessels — ojau, ayaq, tegene, kese."
    }
  },
  "sandyq": {
    "ru": {
      "action": "Традиция приданого →",
      "quiz": "Викторина: в каком важном обряде используется сандык?",
      "qrTitle": "Свадебное убранство",
      "qrText": "Отсканируйте QR, чтобы увидеть обряды «открытия сундука», приданого и организации перекочёвки."
    },
    "en": {
      "action": "Dowry tradition →",
      "quiz": "Quiz: in what important ritual is the sandyq used?",
      "qrTitle": "Wedding trousseau",
      "qrText": "Scan the QR code to see the rites of 'opening the chest', the dowry, and organising the migration."
    }
  },
  "togyzqumalaq": {
    "ru": {
      "action": "Правила игры →",
      "quiz": "Викторина: сколько лунок на доске тогызкумалак?",
      "qrTitle": "Правила игры",
      "qrText": "Отсканируйте QR, чтобы изучить правила тогызкумалак и участвовать в онлайн-турнирах."
    },
    "en": {
      "action": "Game rules →",
      "quiz": "Quiz: how many pits are on a togyzqumalaq board?",
      "qrTitle": "Game rules",
      "qrText": "Scan the QR code to learn the rules of togyzqumalaq and join online tournaments."
    }
  },
  "sazsyrnai": {
    "ru": {
      "action": "Слушать голос Туркестана →",
      "quiz": "Викторина: из какого материала сделан сазсырнай?",
      "qrTitle": "Древний голос",
      "qrText": "Отсканируйте QR, чтобы услышать чистое звучание сазсырная."
    },
    "en": {
      "action": "Listen to the voice of Turkestan →",
      "quiz": "Quiz: what material is the sazsyrnai made from?",
      "qrTitle": "Ancient voice",
      "qrText": "Scan the QR code to hear the pure sound of the sazsyrnai."
    }
  },
  "shanqobyz": {
    "ru": {
      "action": "Слушать звучание →",
      "quiz": "Викторина: каким способом играют на шанкобызе?",
      "qrTitle": "Резонанс",
      "qrText": "Отсканируйте QR, чтобы услышать мелодию шанкобыза, рождённую ротовым резонансом."
    },
    "en": {
      "action": "Listen to the sound →",
      "quiz": "Quiz: how is the shan-qobyz played?",
      "qrTitle": "Resonance",
      "qrText": "Scan the QR code to hear the shan-qobyz melody, born of mouth-cavity resonance."
    }
  },
  "perstenj": {
    "ru": {
      "action": "Ювелирное искусство →",
      "quiz": "Викторина: для чего носили клювовидное кольцо?",
      "qrTitle": "Искусство серебра",
      "qrText": "Отсканируйте QR, чтобы увидеть технику скани, зерни и шеке казахских ювелиров."
    },
    "en": {
      "action": "Jewellery craft →",
      "quiz": "Quiz: why was the beak-shaped ring worn?",
      "qrTitle": "Art of silver",
      "qrText": "Scan the QR code to see the filigree, granulation and sheke techniques of Kazakh jewellers."
    }
  },
  "bilezik": {
    "ru": {
      "action": "Работы ювелира →",
      "quiz": "Викторина: сколько агатов в этом браслете?",
      "qrTitle": "Современный ювелир",
      "qrText": "Отсканируйте QR, чтобы познакомиться с другими работами Шапабаева Кайрата Булатовича."
    },
    "en": {
      "action": "Jeweller's works →",
      "quiz": "Quiz: how many agates does this bracelet have?",
      "qrTitle": "Contemporary jeweller",
      "qrText": "Scan the QR code to explore other works by Kairat Bulatovich Shapabayev."
    }
  },
  "kese": {
    "ru": {
      "action": "Искусство керамики →",
      "quiz": "Викторина: к какому веку относится эта пиала?",
      "qrTitle": "Средневековая керамика",
      "qrText": "Отсканируйте QR, чтобы увидеть керамические школы Отрара, Тараза, Сайрама и виды орнамента."
    },
    "en": {
      "action": "Art of ceramics →",
      "quiz": "Quiz: which century does this bowl belong to?",
      "qrTitle": "Medieval ceramics",
      "qrText": "Scan the QR code to see the ceramic schools of Otrar, Taraz and Sayram and their ornament styles."
    }
  },
  "korzhyn": {
    "ru": {
      "action": "Искусство ткачества →",
      "quiz": "Викторина: для чего использовался коржын?",
      "qrTitle": "Тканый орнамент",
      "qrText": "Отсканируйте QR, чтобы увидеть технику ткачества коржына и значения орнамента."
    },
    "en": {
      "action": "Art of weaving →",
      "quiz": "Quiz: what was the korzhyn used for?",
      "qrTitle": "Woven ornament",
      "qrText": "Scan the QR code to see the korzhyn's weaving technique and the meaning of its ornament."
    }
  },
  "syrmaq": {
    "ru": {
      "action": "Мозаичная аппликация →",
      "quiz": "Викторина: какая техника лежит в основе сырмака?",
      "qrTitle": "Искусство войлочного ковра",
      "qrText": "Отсканируйте QR, чтобы увидеть различия сырмака, текемета, туекиiз и процесс их изготовления."
    },
    "en": {
      "action": "Mosaic appliqué →",
      "quiz": "Quiz: what technique is the syrmaq based on?",
      "qrTitle": "Art of the felt carpet",
      "qrText": "Scan the QR code to see the differences between syrmaq, tekemet and tuskiiz, and how they are made."
    }
  },
  "dulyga": {
    "ru": {
      "action": "Оружие воина →",
      "quiz": "Викторина: из чего сделана бармица дулыги?",
      "qrTitle": "Защита воина",
      "qrText": "Отсканируйте QR, чтобы увидеть полный доспех казахского воина и виды шлемов."
    },
    "en": {
      "action": "Warrior's arms →",
      "quiz": "Quiz: what is the dulyga's aventail made of?",
      "qrTitle": "Warrior's defence",
      "qrText": "Scan the QR code to see the full armour of a Kazakh warrior and the types of helmets."
    }
  }
};

const QUIZ_META_I18N = {
  "ru": {
    "yurt_low_quality_texture": {
      "cat": "Жилище",
      "label": "юрта"
    },
    "dombyra_by_sultan_elamanov": {
      "cat": "Музыка",
      "label": "домбра · чёрное дерево"
    },
    "kazakh_qobyz_kobyz": {
      "cat": "Музыка",
      "label": "кобыз · берёза"
    },
    "kazakh_shapan": {
      "cat": "Нац. одежда",
      "label": "шапан"
    },
    "taqiya_grey_m_kazakh_national_headdress": {
      "cat": "Головной убор",
      "label": "тақия · мужская"
    },
    "taqiya_yellow_f_kazakh_traditional_headdress": {
      "cat": "Головной убор",
      "label": "тақия · девичья"
    },
    "saukele_ethno_variant_traditional_headdress": {
      "cat": "Головной убор",
      "label": "саукеле · свадебный"
    },
    "qamshy_kamshy": {
      "cat": "Ремесло",
      "label": "камча · плетение"
    },
    "Asyk": {
      "cat": "Нац. игра",
      "label": "овечья кость"
    },
    "besik": {
      "cat": "Быт",
      "label": "бесик · берёза"
    },
    "nomad_sabre": {
      "cat": "Оружие",
      "label": "сталь · кость"
    },
    "balbal_tas": {
      "cat": "Древнее наследие",
      "label": "камень · тюркская эпоха"
    },
    "tamgaly_sun_man": {
      "cat": "Древнее наследие",
      "label": "петроглиф · камень"
    },
    "astau_tabaq": {
      "cat": "Быт",
      "label": "астау · дерево"
    },
    "torsyk_kymyz": {
      "cat": "Быт",
      "label": "сосуд для кумыса"
    },
    "sedlo": {
      "cat": "Ремесло",
      "label": "седло · кожа"
    },
    "aibalta": {
      "cat": "Оружие",
      "label": "айбалта · серебро"
    },
    "qalqan": {
      "cat": "Оружие",
      "label": "сталь · латунь"
    },
    "kubi": {
      "cat": "Быт",
      "label": "кюби для кумыса"
    },
    "ojau": {
      "cat": "Быт",
      "label": "деревянный ковш"
    },
    "sandyq": {
      "cat": "Быт",
      "label": "деревянный сундук"
    },
    "togyzqumalaq": {
      "cat": "Нац. игра",
      "label": "деревянная доска"
    },
    "sazsyrnai": {
      "cat": "Музыка",
      "label": "глиняный инструмент"
    },
    "shanqobyz": {
      "cat": "Музыка",
      "label": "варган · язычок"
    },
    "perstenj": {
      "cat": "Ювелирика",
      "label": "серебряное кольцо"
    },
    "bilezik": {
      "cat": "Ювелирика",
      "label": "серебряный браслет"
    },
    "kese": {
      "cat": "Быт",
      "label": "керамика"
    },
    "korzhyn": {
      "cat": "Быт",
      "label": "дорожная сумка"
    },
    "syrmaq": {
      "cat": "Быт",
      "label": "войлочный ковёр"
    },
    "dulyga": {
      "cat": "Оружие",
      "label": "шлем воина"
    }
  },
  "en": {
    "yurt_low_quality_texture": {
      "cat": "Dwelling",
      "label": "yurt"
    },
    "dombyra_by_sultan_elamanov": {
      "cat": "Music",
      "label": "dombra · dark wood"
    },
    "kazakh_qobyz_kobyz": {
      "cat": "Music",
      "label": "qobyz · birch"
    },
    "kazakh_shapan": {
      "cat": "National Clothing",
      "label": "shapan"
    },
    "taqiya_grey_m_kazakh_national_headdress": {
      "cat": "Headwear",
      "label": "taqiya · men's"
    },
    "taqiya_yellow_f_kazakh_traditional_headdress": {
      "cat": "Headwear",
      "label": "taqiya · girl's"
    },
    "saukele_ethno_variant_traditional_headdress": {
      "cat": "Headwear",
      "label": "saukele · ceremonial"
    },
    "qamshy_kamshy": {
      "cat": "Craft",
      "label": "qamshy · braiding"
    },
    "Asyk": {
      "cat": "National Game",
      "label": "sheep's anklebone"
    },
    "besik": {
      "cat": "Household",
      "label": "besik · birch"
    },
    "nomad_sabre": {
      "cat": "Weapon",
      "label": "steel · bone"
    },
    "balbal_tas": {
      "cat": "Ancient Heritage",
      "label": "stone · Turkic era"
    },
    "tamgaly_sun_man": {
      "cat": "Ancient Heritage",
      "label": "petroglyph · stone"
    },
    "astau_tabaq": {
      "cat": "Household",
      "label": "astau · wood"
    },
    "torsyk_kymyz": {
      "cat": "Household",
      "label": "kumys vessel"
    },
    "sedlo": {
      "cat": "Craft",
      "label": "saddle · leather"
    },
    "aibalta": {
      "cat": "Weapon",
      "label": "aibalta · silver"
    },
    "qalqan": {
      "cat": "Weapon",
      "label": "steel · brass"
    },
    "kubi": {
      "cat": "Household",
      "label": "kumys churn"
    },
    "ojau": {
      "cat": "Household",
      "label": "wooden ladle"
    },
    "sandyq": {
      "cat": "Household",
      "label": "wooden chest"
    },
    "togyzqumalaq": {
      "cat": "National Game",
      "label": "wooden board"
    },
    "sazsyrnai": {
      "cat": "Music",
      "label": "clay instrument"
    },
    "shanqobyz": {
      "cat": "Music",
      "label": "jaw harp · reed"
    },
    "perstenj": {
      "cat": "Jewellery",
      "label": "silver ring"
    },
    "bilezik": {
      "cat": "Jewellery",
      "label": "silver bracelet"
    },
    "kese": {
      "cat": "Household",
      "label": "ceramics"
    },
    "korzhyn": {
      "cat": "Household",
      "label": "travel bag"
    },
    "syrmaq": {
      "cat": "Household",
      "label": "felt carpet"
    },
    "dulyga": {
      "cat": "Weapon",
      "label": "warrior's helmet"
    }
  }
};

const REGION_I18N = {
  "almaty_obl": {
    "ru": {
      "era": "V в. до н.э. — наши дни",
      "legend": "У подножия Заилийского Алатау — земля Жетысу, сердце Старшего жуза. В 1969 году из кургана Иссык извлечён «Золотой человек» — сакский воин с 4000 золотых украшений. В 2022 году от области отделилась Жетысуская область.",
      "batyrs": [
        "Райымбек батыр (1705-1785)",
        "Суюнбай Аронулы",
        "Абылмансур (Абылай-хан)"
      ],
      "monuments": [
        "«Золотой человек» (Иссык)",
        "Мавзолей Райымбека",
        "Петроглифы Тамгалы (ЮНЕСКО)",
        "Курганы Заилийского Алатау"
      ],
      "tags": [
        "сакское наследие",
        "айтыс",
        "беркутчи",
        "конные скачки"
      ]
    },
    "en": {
      "era": "5th c. BC — present",
      "legend": "At the foot of the Trans-Ili Alatau lies Jetisu, the heartland of the Uly zhuz. In 1969 the Issyk kurgan yielded the 'Golden Man' — a Saka warrior adorned with 4,000 gold ornaments. In 2022, Jetisu Region split off from this territory.",
      "batyrs": [
        "Raiymbek Batyr (1705-1785)",
        "Suyunbai Aronuly",
        "Abylmansur (Abylai Khan)"
      ],
      "monuments": [
        "Issyk 'Golden Man'",
        "Raiymbek Mausoleum",
        "Tamgaly Petroglyphs (UNESCO)",
        "Trans-Ili Alatau kurgans"
      ],
      "tags": [
        "Saka heritage",
        "aitys",
        "eagle falconry",
        "horse racing"
      ]
    }
  },
  "akmola": {
    "ru": {
      "era": "VII-XIX вв.",
      "legend": "На реке Есиль в VII-XIV веках существовал средневековый город Бозок. Последний казахский хан Кенесары (1802-1847) сделал эту степь своим центром. В центре области — столица, Астана.",
      "batyrs": [
        "Кенесары Касымулы",
        "Ставка Абылай-хана",
        "Наурызбай батыр"
      ],
      "monuments": [
        "Городище Бозок",
        "Озёра Бурабая (Кокшетау)",
        "Ставка Абылай-хана",
        "Ботайская культура"
      ],
      "tags": [
        "национально-освободительное движение",
        "озёра",
        "охота"
      ]
    },
    "en": {
      "era": "7th-19th c.",
      "legend": "On the Esil River, the medieval town of Bozoq stood from the 7th to 14th centuries. Kenesary (1802-1847), the last Kazakh khan, made this steppe his base. At the region's centre lies the capital, Astana.",
      "batyrs": [
        "Kenesary Kasymuly",
        "Abylai Khan's headquarters",
        "Nauryzbai Batyr"
      ],
      "monuments": [
        "Bozoq settlement",
        "Burabai (Kokshetau) lakes",
        "Abylai Khan's headquarters",
        "Botai culture"
      ],
      "tags": [
        "national liberation",
        "lakes",
        "hunting"
      ]
    }
  },
  "aktobe": {
    "ru": {
      "era": "XIV-XIX вв.",
      "legend": "В западной степи Есет батыр Котибарулы (1667-1749) возглавил борьбу против джунгар. Мавзолей Абат-Байтак, построенный в XIV веке, — один из красивейших средневековых памятников Казахстана.",
      "batyrs": [
        "Есет батыр Котибарулы",
        "Айтеке би",
        "Тлеу батыр"
      ],
      "monuments": [
        "Мавзолей Абат-Байтак",
        "Ханская могила",
        "Регион Иргиз-Торгай"
      ],
      "tags": [
        "батыры",
        "суд биев",
        "скотоводство"
      ]
    },
    "en": {
      "era": "14th-19th c.",
      "legend": "On the western steppe, Yeset Batyr Kotibaruly (1667-1749) led the resistance against the Jungars. The Abat-Baitaq mausoleum, built in the 14th century, is one of Kazakhstan's finest medieval monuments.",
      "batyrs": [
        "Yeset Batyr Kotibaruly",
        "Aiteke Bi",
        "Tleu Batyr"
      ],
      "monuments": [
        "Abat-Baitaq Mausoleum",
        "Khan's tomb",
        "Irgiz-Torgai region"
      ],
      "tags": [
        "warriors",
        "biys' court",
        "cattle-herding"
      ]
    }
  },
  "atyrau": {
    "ru": {
      "era": "XIII-XIX вв.",
      "legend": "Каспийско-Уральский регион. В XIII-XVI веках Сарайшык был летней столицей Золотой Орды, здесь похоронены семь ханов. В XIX веке — очаг восстания Махамбета и Исатая 1836-1838 годов.",
      "batyrs": [
        "Махамбет Утемисулы",
        "Исатай Тайманулы",
        "хан Жанибек",
        "Тохтамыш"
      ],
      "monuments": [
        "Сарайшык (пантеон семи ханов)",
        "Музей Махамбета",
        "Атырауский областной музей",
        "гора Иманкара"
      ],
      "tags": [
        "Золотая Орда",
        "жырау",
        "айтыс",
        "национально-освободительное движение"
      ]
    },
    "en": {
      "era": "13th-19th c.",
      "legend": "The Caspian-Ural region. From the 13th to 16th centuries, Saraishyq was the summer capital of the Golden Horde, resting place of seven khans. In the 19th century, it became the cradle of the 1836-1838 Makhambet-Isatai uprising.",
      "batyrs": [
        "Makhambet Utemisuly",
        "Isatai Taimanuly",
        "Khan Janibek",
        "Tokhtamysh"
      ],
      "monuments": [
        "Saraishyq (pantheon of seven khans)",
        "Makhambet Museum",
        "Atyrau Regional Museum",
        "Mount Imankara"
      ],
      "tags": [
        "Golden Horde",
        "zhyrau poetry",
        "aitys",
        "national liberation"
      ]
    }
  },
  "east_kz": {
    "ru": {
      "era": "IV в. до н.э. — наши дни",
      "legend": "У подножия Алтая. Курганы Берел (IV-III вв. до н.э.) — вершина пазырыкской культуры. Найдены «Золотой воин», золотые фигуры, конское снаряжение. В 2022 году отделилась Абайская область (Шынгыстау, родина Абая).",
      "batyrs": [
        "Сакские вожди",
        "Кабанбай батыр",
        "зимовка Абылай-хана"
      ],
      "monuments": [
        "Курганы Берел",
        "Золотое одеяние",
        "Берег Иртыша",
        "озеро Маркаколь",
        "источники Рахмановские"
      ],
      "tags": [
        "пазырык-саки",
        "золотое искусство",
        "ледяной курган",
        "охота"
      ]
    },
    "en": {
      "era": "4th c. BC — present",
      "legend": "At the foot of the Altai Mountains. The Berel kurgans (4th-3rd c. BC) mark the peak of the Pazyryk culture — a 'Golden Warrior', gold figurines and horse harness were unearthed here. In 2022, Abai Region (Shyngystau, birthplace of Abai) split off.",
      "batyrs": [
        "Saka chieftains",
        "Kabanbay Batyr",
        "Abylai Khan's winter camp"
      ],
      "monuments": [
        "Berel kurgans",
        "Golden attire",
        "Irtysh riverbank",
        "Lake Markakol",
        "Rakhmanov springs"
      ],
      "tags": [
        "Pazyryk-Saka",
        "gold artistry",
        "frozen kurgan",
        "hunting"
      ]
    }
  },
  "mangystau": {
    "ru": {
      "era": "Средневековье — наши дни",
      "legend": "362 святых места. Бекет-ата (1750-1813) — «святой святых», наставник народа. Его подземная мечеть Огланды — почитаемое место паломничества и поныне. Гора Шеркала — удивительный природный памятник.",
      "batyrs": [
        "Бекет-ата",
        "Шопан-ата",
        "Караман-ата",
        "Есет батыр Котибарулы"
      ],
      "monuments": [
        "Подземная мечеть Бекет-ата",
        "Мавзолей Шопан-ата",
        "гора Шеркала",
        "комплекс Огланды",
        "Босжира"
      ],
      "tags": [
        "паломничество",
        "суфизм",
        "коневодство",
        "подземная мечеть"
      ]
    },
    "en": {
      "era": "Medieval era — present",
      "legend": "362 sacred sites. Beket-Ata (1750-1813) — the 'saint of saints' and mentor of the people. His underground mosque at Oglandy remains a revered place of pilgrimage today. Mount Sherkala is a striking natural landmark.",
      "batyrs": [
        "Beket-Ata",
        "Shopan-Ata",
        "Karaman-Ata",
        "Yeset Batyr Kotibaruly"
      ],
      "monuments": [
        "Beket-Ata underground mosque",
        "Shopan-Ata mausoleum",
        "Mount Sherkala",
        "Oglandy complex",
        "Bozzhyra"
      ],
      "tags": [
        "pilgrimage",
        "Sufism",
        "horse breeding",
        "underground mosque"
      ]
    }
  },
  "north_kz": {
    "ru": {
      "era": "IV тыс. до н.э. — XIX в.",
      "legend": "Древний город Кызылжар (Петропавловск) был северной ставкой Абылай-хана. В этом регионе — Ботайская культура (~5500 лет назад), место первого одомашнивания лошади в истории человечества.",
      "batyrs": [
        "Абылай-хан",
        "Жанибек батыр",
        "Мукан батыр"
      ],
      "monuments": [
        "Ставка Абылай-хана",
        "Место Ботайской культуры",
        "Айыртау (Ыбырай Алтынсарин)",
        "город Кызылжар"
      ],
      "tags": [
        "одомашнивание лошади",
        "степная охота",
        "айтыс"
      ]
    },
    "en": {
      "era": "4th mill. BC — 19th c.",
      "legend": "The ancient town of Qyzylzhar (Petropavl) served as Abylai Khan's northern headquarters. This region is home to the Botai culture (~5500 years ago), the site of humanity's first horse domestication.",
      "batyrs": [
        "Abylai Khan",
        "Janibek Batyr",
        "Muqan Batyr"
      ],
      "monuments": [
        "Abylai Khan's headquarters",
        "Botai culture site",
        "Ayyrtau (Ybyrai Altynsarin)",
        "Town of Qyzylzhar"
      ],
      "tags": [
        "horse domestication",
        "steppe hunting",
        "aitys"
      ]
    }
  },
  "pavlodar": {
    "ru": {
      "era": "XIX-XX вв.",
      "legend": "На берегу Иртыша горы Баянаула — родина казахских просветителей и учёных. Здесь родились Машхур Жусуп Копеев (1858-1931), Султанмахмут Торайгыров (1893-1920), Каныш Сатпаев.",
      "batyrs": [
        "Машхур Жусуп Копеев",
        "Султанмахмут Торайгыров",
        "Каныш Сатпаев"
      ],
      "monuments": [
        "Национальный парк Баянаул",
        "Берег Иртыша",
        "Музей Машхур Жусупа",
        "Каменный музей К. Сатпаева"
      ],
      "tags": [
        "просвещение",
        "поэзия",
        "наука",
        "горная культура"
      ]
    },
    "en": {
      "era": "19th-20th c.",
      "legend": "On the banks of the Irtysh, the Bayanaul mountains are the homeland of Kazakh enlighteners and scholars. Mashhur Zhusup Kopeyev (1858-1931), Sultanmakhmut Toraighyrov (1893-1920) and Kanysh Satpayev were all born here.",
      "batyrs": [
        "Mashhur Zhusup Kopeyev",
        "Sultanmakhmut Toraighyrov",
        "Kanysh Satpayev"
      ],
      "monuments": [
        "Bayanaul National Park",
        "Irtysh riverbank",
        "Mashhur Zhusup Museum",
        "K. Satpayev stone museum"
      ],
      "tags": [
        "enlightenment",
        "poetry",
        "science",
        "mountain culture"
      ]
    }
  },
  "karagandy": {
    "ru": {
      "era": "X-XIX вв.",
      "legend": "Сердце Сарыарки. Касым-хан (1445-1521) издал свод законов «Қасқа жолы». Богенбай батыр — соратник Абылай-хана. В 2022 году отделилась Улытауская область (с мавзолеями Жошы-хана и Алаша-хана).",
      "batyrs": [
        "Богенбай батыр (1690-1775)",
        "Касым-хан",
        "Қаз дауысты Казыбек би",
        "Наурызбай батыр"
      ],
      "monuments": [
        "Мавзолей Богенбая",
        "Место ставки Касым-хана",
        "Петроглифы Найзатас",
        "Мавзолей Домбауыл (в Улытау)",
        "Мавзолей Алаша-хана"
      ],
      "tags": [
        "суд биев",
        "свод законов",
        "батыры",
        "древний мавзолей"
      ]
    },
    "en": {
      "era": "10th-19th c.",
      "legend": "The heart of Saryarka. Qasym Khan (1445-1521) issued the 'Qasqa Zholy' code of law. Bogenbai Batyr was Abylai Khan's close companion. In 2022, Ulytau Region (with the mausoleums of Jochi Khan and Alasha Khan) split off.",
      "batyrs": [
        "Bogenbai Batyr (1690-1775)",
        "Qasym Khan",
        "Qaz Dauysty Qazybek Bi",
        "Naurizbai Batyr"
      ],
      "monuments": [
        "Bogenbai Mausoleum",
        "Site of Qasym Khan's headquarters",
        "Naizatas petroglyphs",
        "Dombauyl Mausoleum (Ulytau)",
        "Alasha Khan Mausoleum"
      ],
      "tags": [
        "biys' court",
        "law code",
        "warriors",
        "ancient mausoleum"
      ]
    }
  },
  "kostanay": {
    "ru": {
      "era": "XIX-XX вв.",
      "legend": "Торгайская степь — родина Ыбырая Алтынсарина (1841-1889), казахского просветителя, педагога и писателя. Он открыл первую казахско-русскую школу. Торгайское восстание 1916 года началось под руководством Амангельды Иманова.",
      "batyrs": [
        "Ыбырай Алтынсарин",
        "Амангельды Иманов",
        "Кейки батыр"
      ],
      "monuments": [
        "Музей Ы. Алтынсарина",
        "река Торгай",
        "заповедник Наурзум",
        "мавзолей Нарбозы"
      ],
      "tags": [
        "просвещение",
        "степное образование",
        "восстание 1916 года"
      ]
    },
    "en": {
      "era": "19th-20th c.",
      "legend": "The Torgai steppe is the birthplace of Ybyrai Altynsarin (1841-1889), a Kazakh enlightener, educator and writer who opened the first Kazakh-Russian school. The 1916 Torgai uprising began under Amangeldy Imanov's leadership.",
      "batyrs": [
        "Ybyrai Altynsarin",
        "Amangeldy Imanov",
        "Keiki Batyr"
      ],
      "monuments": [
        "Y. Altynsarin Museum",
        "Torgai River",
        "Naurzum Nature Reserve",
        "Narbozy Mausoleum"
      ],
      "tags": [
        "enlightenment",
        "steppe education",
        "1916 uprising"
      ]
    }
  },
  "kyzylorda": {
    "ru": {
      "era": "VIII-XX вв.",
      "legend": "Берег Сырдарьи — священная земля Коркыт-ата (VIII-IX вв.). «Книга деда Коркута» — один из древнейших письменных памятников тюркского мира. Сегодня здесь — космодром Байконур, эпоха космоса.",
      "batyrs": [
        "Коркыт-ата",
        "Бухар жырау Калкаманулы",
        "Турар Рыскулов"
      ],
      "monuments": [
        "Мавзолей Коркыт-ата",
        "река Сырдарья",
        "космодром Байконур",
        "городище Жанкент"
      ],
      "tags": [
        "жырау",
        "дастан",
        "космос",
        "орошаемое земледелие"
      ]
    },
    "en": {
      "era": "8th-20th c.",
      "legend": "On the banks of the Syr Darya lies the sacred land of Korkyt-Ata (8th-9th c.). The 'Book of Dede Korkut' is one of the oldest written monuments of the Turkic world. Today it is home to the Baikonur Cosmodrome, gateway to the space age.",
      "batyrs": [
        "Korkyt-Ata",
        "Bukhar Zhyrau Kalkamanuly",
        "Turar Ryskulov"
      ],
      "monuments": [
        "Korkyt-Ata Mausoleum",
        "Syr Darya River",
        "Baikonur Cosmodrome",
        "Jankent settlement"
      ],
      "tags": [
        "zhyrau poetry",
        "epic tales",
        "space",
        "irrigated farming"
      ]
    }
  },
  "turkistan_obl": {
    "ru": {
      "era": "V-XVI вв.",
      "legend": "Духовная столица тюркского мира. Мавзолей Ходжи Ахмеда Ясави (1093-1166) построен по указу Амира Темура в 1389-1405 годах, объект ЮНЕСКО. Отрар — узел Великого Шёлкового пути, родина аль-Фараби. Арыстан-баб — наставник Ясави.",
      "batyrs": [
        "Ходжа Ахмед Ясави",
        "Абу Наср аль-Фараби",
        "Аз-Тауке хан",
        "Тауекел хан",
        "Есим хан"
      ],
      "monuments": [
        "Мавзолей Ясави (ЮНЕСКО)",
        "Мавзолей Арыстан-баб",
        "Городище Отрар",
        "Культобе",
        "Окшы-ата"
      ],
      "tags": [
        "зикр",
        "суфизм",
        "ЮНЕСКО",
        "поэзия"
      ]
    },
    "en": {
      "era": "5th-16th c.",
      "legend": "The spiritual capital of the Turkic world. The Mausoleum of Khoja Ahmed Yasawi (1093-1166) was built on Amir Temur's orders in 1389-1405, a UNESCO site. Otrar was a hub of the Great Silk Road and the birthplace of al-Farabi. Arystan-bab was Yasawi's mentor.",
      "batyrs": [
        "Khoja Ahmed Yasawi",
        "Abu Nasr al-Farabi",
        "Az-Tauke Khan",
        "Tauekel Khan",
        "Esim Khan"
      ],
      "monuments": [
        "Yasawi Mausoleum (UNESCO)",
        "Arystan-bab Mausoleum",
        "Otrar settlement",
        "Kultobe",
        "Oqshy-ata"
      ],
      "tags": [
        "dhikr",
        "Sufism",
        "UNESCO",
        "poetry"
      ]
    }
  },
  "west_kz": {
    "ru": {
      "era": "1801-1845, XIX в.",
      "legend": "Букеевская Орда (1801-1845) — эпоха последнего казахского хана Жангира. Жангир-хан — реформатор: открыл первую школу, мечеть, базар, библиотеку. Курмангазы Сагырбайулы (1818-1889) — классик казахского кюя, автор «Балбырауын».",
      "batyrs": [
        "Жангир-хан",
        "Букей-хан",
        "Курмангазы Сагырбайулы",
        "Дина Нурпеисова"
      ],
      "monuments": [
        "Ханский дворец (Орда)",
        "Мечеть Жангира",
        "Ханский лес",
        "Родина Курмангазы"
      ],
      "tags": [
        "просвещение",
        "кюй",
        "дипломатия",
        "торговля"
      ]
    },
    "en": {
      "era": "1801-1845, 19th c.",
      "legend": "The Bukey Horde (1801-1845) was the era of Jangir, the last khan of this line. Khan Jangir was a reformer — he opened the first school, mosque, market and library. Kurmangazy Sagyrbayuly (1818-1889), the classical master of the kuy, composed 'Balbyrauyn' here.",
      "batyrs": [
        "Khan Jangir",
        "Khan Bukey",
        "Kurmangazy Sagyrbayuly",
        "Dina Nurpeisova"
      ],
      "monuments": [
        "Khan's palace (Orda)",
        "Jangir Mosque",
        "Khan's Forest",
        "Kurmangazy's birthplace"
      ],
      "tags": [
        "enlightenment",
        "kuy music",
        "diplomacy",
        "trade"
      ]
    }
  },
  "jambyl": {
    "ru": {
      "era": "VI-XII вв.",
      "legend": "Тараз — «город купцов» на Великом Шёлковом пути. Мавзолей Айша-биби (XI в.) — жемчужина казахской архитектуры. Легенда об Айше и ханзаде Карахане — тюркская версия «Ромео и Джульетты».",
      "batyrs": [
        "Карахан",
        "хан Токтамыс",
        "Байдибек би",
        "Жамбыл Жабаев"
      ],
      "monuments": [
        "Мавзолей Айша-биби",
        "Мавзолей Бабаджа-хатун",
        "мечеть Карахана",
        "дворец Акыртас"
      ],
      "tags": [
        "торговля",
        "архитектура",
        "поэзия",
        "Шёлковый путь"
      ]
    },
    "en": {
      "era": "6th-12th c.",
      "legend": "Taraz was the 'city of merchants' on the Great Silk Road. The Aisha-Bibi mausoleum (11th c.) is a gem of Kazakh architecture. The legend of Aisha and prince Karakhan is the Turkic version of 'Romeo and Juliet'.",
      "batyrs": [
        "Karakhan",
        "Khan Toktamys",
        "Baidibek Bi",
        "Zhambyl Zhabayev"
      ],
      "monuments": [
        "Aisha-Bibi Mausoleum",
        "Babaja-khatun Mausoleum",
        "Karakhan Mosque",
        "Akyrtas Palace"
      ],
      "tags": [
        "trade",
        "architecture",
        "poetry",
        "Silk Road"
      ]
    }
  }
};

const CITY_I18N = {
  "astana": {
    "ru": {
      "era": "1832 → 1997 столица",
      "legend": "На берегу Есиля в Средние века стоял город Бозок. В 1832 году — крепость Акмола, в 1961 — Целиноград, в 1998 — Астана, в 2019 — Нур-Султан, в 2022 — снова Астана. Сегодня — центр проектов Улы Дала.",
      "batyrs": [
        "Кенесары Касымулы",
        "Наурызбай батыр",
        "Нурсултан Назарбаев"
      ],
      "monuments": [
        "Байтерек",
        "мечеть Хазрет Султан",
        "городище Бозок",
        "Хан Шатыр",
        "Национальный музей"
      ],
      "tags": [
        "столица",
        "дипломатия",
        "архитектура",
        "выставки"
      ],
      "badgeCapital": "Столица республики"
    },
    "en": {
      "era": "1832 → 1997 capital",
      "legend": "The medieval town of Bozoq once stood on the banks of the Esil. In 1832 it was the Akmola fortress; in 1961, Tselinograd; in 1998, Astana; in 2019, Nur-Sultan; and since 2022, Astana again. Today it is the hub of the country's flagship projects.",
      "batyrs": [
        "Kenesary Kasymuly",
        "Naurizbai Batyr",
        "Nursultan Nazarbayev"
      ],
      "monuments": [
        "Baiterek Tower",
        "Hazrat Sultan Mosque",
        "Bozoq settlement",
        "Khan Shatyr",
        "National Museum"
      ],
      "tags": [
        "capital",
        "diplomacy",
        "architecture",
        "exhibitions"
      ],
      "badgeCapital": "Capital of the Republic"
    }
  },
  "almaty_c": {
    "ru": {
      "era": "XIX-XXI вв.",
      "legend": "У подножия Заилийского Алатау. Выросла из крепости Верный, основанной в XIX веке. В 1929-1997 годах — столица Казахской ССР. Сегодня — главный центр культуры и науки. Рядом — древний сакский курган Иссык.",
      "batyrs": [
        "Райымбек батыр",
        "Абылмансур (Абылай-хан)",
        "Суюнбай Аронулы",
        "Г. Мустафин"
      ],
      "monuments": [
        "Мавзолей Райымбека",
        "Медеу — высокогорный каток",
        "Кок-Тобе",
        "памятник Абаю",
        "Национальный музей"
      ],
      "tags": [
        "айтыс",
        "конные скачки",
        "горная культура",
        "музеи"
      ],
      "badgeCity": "Город республиканского значения"
    },
    "en": {
      "era": "19th-21st c.",
      "legend": "At the foot of the Trans-Ili Alatau. It grew from the Verny fortress, founded in the 19th century. From 1929 to 1997 it was the capital of the Kazakh SSR. Today it is the country's main centre of culture and science, near the ancient Saka kurgan of Issyk.",
      "batyrs": [
        "Raiymbek Batyr",
        "Abylmansur (Abylai Khan)",
        "Suyunbai Aronuly",
        "G. Mustafin"
      ],
      "monuments": [
        "Raiymbek Mausoleum",
        "Medeu high-altitude ice rink",
        "Kok-Tobe",
        "Abai Monument",
        "National Museum"
      ],
      "tags": [
        "aitys",
        "horse racing",
        "mountain culture",
        "museums"
      ],
      "badgeCity": "City of republican significance"
    }
  },
  "shymkent": {
    "ru": {
      "era": "XII в. — наши дни",
      "legend": "Древний город (XII в.), южные ворота Великого Шёлкового пути. Близость к Туркестану — прямой путь к памятникам ЮНЕСКО. В 2018 году получил статус города республиканского значения.",
      "batyrs": [
        "Байдибек би",
        "Толе би (в окрестностях)",
        "Турар Рыскулов"
      ],
      "monuments": [
        "Городище Южное",
        "Музей Турара Рыскулова",
        "древний базар",
        "Коныртобе"
      ],
      "tags": [
        "торговля",
        "айтыс",
        "Шёлковый путь",
        "культура"
      ],
      "badgeCity": "Город республиканского значения"
    },
    "en": {
      "era": "12th c. — present",
      "legend": "An ancient city (12th c.), the southern gateway of the Great Silk Road. Its proximity to Turkistan gives direct access to UNESCO monuments. In 2018 it was granted the status of a city of republican significance.",
      "batyrs": [
        "Baidibek Bi",
        "Tole Bi (nearby)",
        "Turar Ryskulov"
      ],
      "monuments": [
        "Ontustik ancient settlement",
        "Turar Ryskulov Museum",
        "ancient bazaar",
        "Konyrtobe"
      ],
      "tags": [
        "trade",
        "aitys",
        "Silk Road",
        "culture"
      ],
      "badgeCity": "City of republican significance"
    }
  }
};

const REGION_NAMES_I18N = {
  "ru": {
    "almaty_obl": "Алматинская область",
    "akmola": "Акмолинская область",
    "aktobe": "Актюбинская область",
    "atyrau": "Атырауская область",
    "east_kz": "Восточный Казахстан",
    "mangystau": "Мангистауская область",
    "north_kz": "Северный Казахстан",
    "pavlodar": "Павлодарская область",
    "karagandy": "Карагандинская область",
    "kostanay": "Костанайская область",
    "kyzylorda": "Кызылординская область",
    "turkistan_obl": "Туркестанская область",
    "west_kz": "Западный Казахстан",
    "jambyl": "Жамбылская область"
  },
  "en": {
    "almaty_obl": "Almaty Region",
    "akmola": "Akmola Region",
    "aktobe": "Aktobe Region",
    "atyrau": "Atyrau Region",
    "east_kz": "East Kazakhstan",
    "mangystau": "Mangystau Region",
    "north_kz": "North Kazakhstan",
    "pavlodar": "Pavlodar Region",
    "karagandy": "Karagandy Region",
    "kostanay": "Kostanay Region",
    "kyzylorda": "Kyzylorda Region",
    "turkistan_obl": "Turkistan Region",
    "west_kz": "West Kazakhstan",
    "jambyl": "Jambyl Region"
  }
};

const CITY_NAMES_I18N = {
  "ru": {
    "astana": "Астана",
    "almaty_c": "Алматы",
    "shymkent": "Шымкент"
  },
  "en": {
    "astana": "Astana",
    "almaty_c": "Almaty",
    "shymkent": "Shymkent"
  }
};

const NEIGHBOR_I18N = {
  "ru": {
    "РЕСЕЙ": "РОССИЯ",
    "ҚЫТАЙ": "КИТАЙ",
    "ҚЫРҒЫЗСТАН": "КЫРГЫЗСТАН",
    "ӨЗБЕКСТАН": "УЗБЕКИСТАН",
    "ТҮРІКМЕНСТАН": "ТУРКМЕНИСТАН",
    "КАСПИЙ ТЕҢІЗІ": "КАСПИЙСКОЕ МОРЕ"
  },
  "en": {
    "РЕСЕЙ": "RUSSIA",
    "ҚЫТАЙ": "CHINA",
    "ҚЫРҒЫЗСТАН": "KYRGYZSTAN",
    "ӨЗБЕКСТАН": "UZBEKISTAN",
    "ТҮРІКМЕНСТАН": "TURKMENISTAN",
    "КАСПИЙ ТЕҢІЗІ": "CASPIAN SEA"
  }
};

const ZLABEL_I18N = {
  "ru": {
    "uly": "Старший жуз",
    "orta": "Средний жуз",
    "kishi": "Младший жуз"
  },
  "en": {
    "uly": "Uly zhuz",
    "orta": "Orta zhuz",
    "kishi": "Kishi zhuz"
  }
};

const TAQIYA_I18N = {
  "ru": {
    "taqiya_grey_m_kazakh_national_headdress": "Тақия (муж.)",
    "taqiya_yellow_f_kazakh_traditional_headdress": "Тақия (жен.)"
  },
  "en": {
    "taqiya_grey_m_kazakh_national_headdress": "Taqiya (men's)",
    "taqiya_yellow_f_kazakh_traditional_headdress": "Taqiya (girl's)"
  }
};

const HERITAGE_I18N = {
  "ru": [
    {
      "name": "Казахстан",
      "role": "Родина",
      "share": [
        "Домбра",
        "Выездка коня",
        "Айтыс",
        "Наурыз",
        "Каменные балбалы",
        "Соколиная охота с беркутом"
      ]
    },
    {
      "name": "Киргизия",
      "role": "Тюркский родственник",
      "share": [
        "Эпос «Манас»",
        "Комуз",
        "Кокпар",
        "Юрта",
        "Скотоводство"
      ]
    },
    {
      "name": "Узбекистан",
      "role": "Общая земля",
      "share": [
        "Туркестанский путь",
        "Домбра",
        "Свадебные традиции",
        "Города Шёлкового пути"
      ]
    },
    {
      "name": "Туркменистан",
      "role": "Тюркский родственник",
      "share": [
        "Ахалтекинская лошадь",
        "Туркменский ковёр",
        "Дутар",
        "Тюбетейка"
      ]
    },
    {
      "name": "Турция",
      "role": "Тюркский мир",
      "share": [
        "Семья тюркских языков",
        "Саз",
        "Дастан",
        "Конная культура",
        "Тюркский совет"
      ]
    },
    {
      "name": "Азербайджан",
      "role": "Тюркский родственник",
      "share": [
        "Мугам",
        "Тар",
        "Дастан",
        "Наурыз",
        "Огузский язык"
      ]
    },
    {
      "name": "Монголия",
      "role": "Великая степь",
      "share": [
        "Наследие Чингисхана",
        "Моринхур",
        "Соколиная охота",
        "Наадам",
        "Древнетюркская письменность"
      ]
    },
    {
      "name": "Синьцзян (КНР)",
      "role": "Казахская диаспора",
      "share": [
        "1,5 млн казахов",
        "Беркутчи",
        "Домбра",
        "Наурыз",
        "Ой-толгау"
      ]
    },
    {
      "name": "Россия (Татарстан · Саха · Тыва · Башкортостан)",
      "role": "Тюркский родственник",
      "share": [
        "Тюркские языки",
        "Кюй",
        "Хомус (варган)",
        "Эпосы",
        "Наурыз"
      ]
    },
    {
      "name": "Иран",
      "role": "Тюркская диаспора",
      "share": [
        "Туркмены",
        "Азербайджанцы",
        "Ковёр",
        "Дастан",
        "Огузский язык"
      ]
    },
    {
      "name": "Афганистан",
      "role": "Казахская диаспора",
      "share": [
        "Казахские аулы",
        "Наурыз",
        "Тюбетейка",
        "Домбра"
      ]
    },
    {
      "name": "Венгрия",
      "role": "Древний родственник",
      "share": [
        "Мадьяры",
        "Конная культура",
        "История племён",
        "Туранское движение",
        "Семь племён"
      ]
    }
  ],
  "en": [
    {
      "name": "Kazakhstan",
      "role": "Homeland",
      "share": [
        "Dombra",
        "Horse training",
        "Aitys",
        "Nauryz",
        "Stone balbals",
        "Eagle falconry"
      ]
    },
    {
      "name": "Kyrgyzstan",
      "role": "Turkic kin",
      "share": [
        "Epic of Manas",
        "Komuz",
        "Kokpar",
        "Yurt",
        "Livestock herding"
      ]
    },
    {
      "name": "Uzbekistan",
      "role": "Shared land",
      "share": [
        "Turkistan route",
        "Dombra",
        "Wedding traditions",
        "Silk Road cities"
      ]
    },
    {
      "name": "Turkmenistan",
      "role": "Turkic kin",
      "share": [
        "Akhal-Teke horse",
        "Turkmen carpet",
        "Dutar",
        "Skullcap"
      ]
    },
    {
      "name": "Turkey",
      "role": "Turkic world",
      "share": [
        "Turkic language family",
        "Saz",
        "Epic tales",
        "Equestrian culture",
        "Turkic Council"
      ]
    },
    {
      "name": "Azerbaijan",
      "role": "Turkic kin",
      "share": [
        "Mugham",
        "Tar",
        "Epic tales",
        "Nauryz",
        "Oghuz language"
      ]
    },
    {
      "name": "Mongolia",
      "role": "Great Steppe",
      "share": [
        "Genghis Khan's legacy",
        "Morin khuur",
        "Eagle falconry",
        "Naadam",
        "Old Turkic script"
      ]
    },
    {
      "name": "Xinjiang (PRC)",
      "role": "Kazakh diaspora",
      "share": [
        "1.5 million Kazakhs",
        "Eagle hunters",
        "Dombra",
        "Nauryz",
        "Oi-tolgau"
      ]
    },
    {
      "name": "Russia (Tatarstan · Sakha · Tuva · Bashkortostan)",
      "role": "Turkic kin",
      "share": [
        "Turkic languages",
        "Kuy music",
        "Khomus (jaw harp)",
        "Epics",
        "Nauryz"
      ]
    },
    {
      "name": "Iran",
      "role": "Turkic diaspora",
      "share": [
        "Turkmens",
        "Azeris",
        "Carpet",
        "Epic tales",
        "Oghuz language"
      ]
    },
    {
      "name": "Afghanistan",
      "role": "Kazakh diaspora",
      "share": [
        "Kazakh villages",
        "Nauryz",
        "Skullcap",
        "Dombra"
      ]
    },
    {
      "name": "Hungary",
      "role": "Ancient kin",
      "share": [
        "Magyars",
        "Equestrian culture",
        "Tribal history",
        "Turanism movement",
        "Seven tribes"
      ]
    }
  ]
};

/* Phase 2 (long-form content) placeholders — filled in a follow-up pass. */
const HISTORY_I18N = { ru:{}, en:{} };
const QUIZ_I18N = { ru:{}, en:{} };
const ACTION_I18N = { ru:{}, en:{} };

/* ─── language state + tiny translate helper (used by both pages) ─── */
let LANG = (function(){ try { return localStorage.getItem('dm_lang') || 'kz'; } catch(e){ return 'kz'; } })();
function t(key){
  return (UI_I18N[LANG] && UI_I18N[LANG][key]) || (UI_I18N.kz && UI_I18N.kz[key]) || key;
}
