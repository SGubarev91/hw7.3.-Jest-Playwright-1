const sorting = require("../../app");

describe("Books names test suit", () => {

  test("Books names should be sorted in ascending order", () => {

    const input = [
      "Гарри Поттер",
      "Волшебник изумрудного города",
      "Властелин Колец",
      "волшебник изумрудного города",
    ];
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "волшебник изумрудного города",
      "Гарри Поттер",
    ];

    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);
  });
});