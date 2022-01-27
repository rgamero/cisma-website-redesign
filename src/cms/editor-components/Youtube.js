/* eslint-disable func-names */
/* eslint-disable object-shorthand */
const Youtube = {
  id: 'youtube',
  label: 'YouTube',
  fields: [
    {
      name: 'url',
      label: 'Youtube video URL',
      widget: 'string',
    },
  ],
  pattern: /^`youtube:\s(.*)`$/,
  fromBlock: function (match) {
    return {
      url: match[1],
    };
  },
  toBlock: function (obj) {
    return `\`youtube: ${obj.url}\``;
  },
};

export default Youtube;
