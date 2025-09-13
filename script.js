const tg = window.Telegram.WebApp;

tg.ready()
tg.expand()

tg.BackButton.show();
tg.BackButton.onClick(() => tg.close());
