const tg = window.Telegram.WebApp;

tg.ready()
tg.expand()

tg.BackButton.show();
tg.BackButton.onClick(() => tg.close());


console.log('User:', tg.initDataUnsafe.user)
console.log('Theme:', tg.colorScheme)