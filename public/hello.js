const siteUrl = 'https://safwat-salem.vercel.app';
const taglineOptions = ['دعوة الغريب تستجاب', 'إدعي لي'];
const tagline =
  taglineOptions[Math.floor(Math.random() * taglineOptions.length)];

const message = {
  text: `%c${tagline}`,
  styles: [
    `color: inherit; font-size: 28px; font-weight: 900; margin-bottom: 12px; line-height: 35px;`,
  ],
  line: {
    text: `%c\nContinue reading here ${siteUrl}\n %c`,
    styles: [`color: inherit; font-size: 14px;`, ''],
  },
};

let textStyles;
message.text = `${message.text}${message.line.text}`;
(textStyles = message.styles).push.apply(textStyles, message.line.styles);

console.log.apply(this, [`\n${message.text}`].concat(message.styles));
