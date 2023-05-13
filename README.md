# Password generator App

![](./preview.png)

Dependencies:

- React JS
- Sass

First run npm install to add all the dependencies.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

This app generates random passwords. You can select multiple options to build a strong one, including a slider for the length, and checkboxes for upper and lowe case letters, numbers and symbols. While you select your settings you receive feedback at the same time, stating how weak or strong your password will be with the selected options. The different password strengths are stored in a constant file called passwordStrengths.

Once you press the generate button, you will get your password ready at the top, so you can copy it to your clipboard with just one click.

There are 3 different contexts, one is character lenght, the second one is to manage the state of the generated password, and the last one is to control what the password includes (uppercase, lowercase, numbers, symbols)
