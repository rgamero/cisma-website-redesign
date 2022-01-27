/* eslint-disable func-names */
/* eslint-disable object-shorthand */
const Soundcloud = {
  id: 'soundcloud',
  label: 'SoundCloud',
  fields: [
    {
      name: 'url',
      label: 'SoundCloud URL',
      widget: 'string',
    },
  ],
  pattern: /^https?:\/\/(soundcloud\.com|snd\.sc)\/(.*)$/,
  fromBlock: function (match) {
    return {
      url: match[0],
    };
  },
  toBlock: function (obj) {
    return `${obj.url}`;
  },
};

export default Soundcloud;
