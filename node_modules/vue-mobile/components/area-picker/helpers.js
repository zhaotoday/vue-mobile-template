import areas from "./areas.json";

export const helpers = {
  getIndex(items, code) {
    return items.findIndex((item) => item.code === code);
  },
  getValueByCode(code, showDistrict) {
    if (!code) return [];

    const pCode = code.substr(0, 2);
    const cCode = code.substr(0, 4);
    const pIndex = this.getIndex(areas, pCode);
    const cIndex = this.getIndex(areas[pIndex].children, cCode);
    const dIndex = showDistrict
      ? this.getIndex(areas[pIndex].children[cIndex].children, code)
      : 0;

    return [pIndex, cIndex, dIndex];
  },
  getNamesByCode(code, showDistrict) {
    if (!code) return "";

    const [v0, v1, v2] = this.getValueByCode(code);
    const provinceName = areas[v0].name;
    const cityName = areas[v0].children[v1].name;

    if (showDistrict) {
      const distributeName = areas[v0].children[v1].children[v2].name;

      return `${provinceName}.${cityName}.${distributeName}`;
    } else {
      return `${provinceName}.${cityName}`;
    }
  },
  getCodeByNames(names) {
    if (!names) return "";

    const [v0, v1] = names.split(".");
    const city = [...areas]
      .find((item) => item.name === v0)
      .children.find((item) => item.name === v1);

    return city ? city.code : "";
  },
};
