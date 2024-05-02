module.exports = {
  rules: {
    'color-no-invalid-hex': true, //Запретить недопустимые шестнадцатеричные цвета.
    'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }], //Укажите нижний или верхний регистр для значений ключевых слов.
    'property-no-unknown': true, //Запретить неизвестные свойства.
    'declaration-block-no-duplicate-properties': true, //Запретить дублирование свойств в блоках объявлений.
    'declaration-block-no-shorthand-property-overrides': true, //Запретить сокращенные свойства, которые переопределяют связанные полные свойства.
    'media-feature-name-no-unknown': true, //Запретить неизвестные имена медиа-функций.
    'comment-no-empty': true, //Запретить пустые комментарии.
    'no-descending-specificity': true, //Запретить появление селекторов с более низкой специфичностью после переопределения селекторов с более высокой специфичностью.
    'no-duplicate-selectors': true, //Запретить дублирование селекторов.
    'no-invalid-position-at-import-rule': true, //Запретить недопустимые @import правила позиции.
    'alpha-value-notation': 'number', //Укажите процентное обозначение для альфа-значений (недопустимо opacity: 50%, допустимо opacity: .5)
    'color-function-notation': 'modern', //Укажите современные обозначения для функций цвета.
    'color-hex-length': 'short', //Укажите короткую запись для шестнадцатеричных цветов.
    'length-zero-no-unit': true, //Запретить единицы нулевой длины. (Недопустимо top: 0px, допустимо top: 0;)
    'font-family-name-quotes': 'always-where-required', //запретить кавычки для названий семейств шрифтов
    'function-url-quotes': 'never', //Запретить кавычки для URL-адресов.
    'import-notation': 'url', //Укажите обозначение URL-адреса для @import правил (Допустимо @import url(foo.css);)
    'shorthand-property-no-redundant-values': true, //Запретить избыточные значения в сокращенных свойствах.
    'declaration-no-important': true, //Запретить !important внутри объявлений. (Недопустимо a { color: pink !important; })
    'declaration-block-single-line-max-declarations': 1, //Ограничьте количество объявлений в однострочном блоке объявлений. В строке одно свойство.
    'no-unknown-animations': true, //Запретить неизвестные анимации.
    'selector-type-case': 'lower', //Укажите нижний регистр для селекторов типов.
    'rule-empty-line-before': 'always', //Между правилами должна быть пусая строка
    'at-rule-empty-line-before': 'always', //Пустая строка перед at-правилами
    'selector-class-pattern': null, //Укажите шаблон для селекторов классов.
    'font-family-name-quotes': 'always-where-recommended', //Требовать  кавычки для названий семейств шрифтов.
    // допустимо (a { font-family: 'Times New Roman', Times, serif; })
  },
};
