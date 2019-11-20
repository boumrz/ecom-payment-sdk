# Payment Page Sdk

JS библиотека для открытия формы оплаты.

## Подключение

Если вы используете React, то для подключения библиотеки пропишите следующий import:

```
import PaymentPageSdk from '@raiffeisen-ecom/payment-sdk';
```

или

для работы библиотеки в рабочем проекте подключите минимифицированный скрипт:

```
<script src="https://e-commerce.raiffeisen.ru/pay/sdk/payment.styled.min.js"></script>
```

для расширенной работы с кодом подключите обычный скрипт:

```
<script src="https://e-commerce.raiffeisen.ru/pay/sdk/payment.styled.js"></script>
```

## Использование библиотеки

Вся работа с библиотекой происходит через обращения к классу `PaymentPageSdk`

#### Минимальные условия для запуска:

Обязательные парамеры:

* publicId (String) - идентификатор продавца;
* amount (Amount) - стоимость товара;

##### Форма оплаты в виде всплывающего окна:

```
const paymentPage = new PaymentPageSdk('000001680211111-80211111');

paymentPage.openPopup({amount: 10.10})
        .then(resolve => {
                        console.log(resolve, "Спасибо");
                    })
        .catch(() => {
                        console.log("Неудача");
                    });
);
```

##### Открытие в новой вкладке:
 
```
const paymentPage = new PaymentPageSdk('000001680211111-80211111');

paymentPage.openWindow({amount: 10.10});
```

##### Открытие в той же вкладке:

```
const paymentPage = new PaymentPageSdk('000001680211111-80211111');

paymentPage.replace({amount: 10.10});
```

#### Расширенные параметры для запуска:

Обязательные параметры:

* publicId (String) - идентификатор продавца;
* amount (Amount) - стоимость товара;

Необязательные параметры:

* orderId (String) - номер заказа;
* extra (String) - любые данные, которые продавец хочет получить при вызове колбэка;
* receipt (String) - параметр, который позволяет зарегистрировать чек покупки;
* style (String) - продавцу предоставляется возможность самому изменить стилизацию страницы;
* successUrl (String) - ссылка, на которую перейдёт покупатель, в случае успешной оплаты;
* failUrl (String) - ссылка, на которую перейдёт покупатель, в случае неудачной оплаты;
* comment (String) - описание товара, который приобретает покупатель.

##### Форма оплаты в виде всплывающего окна:

```
const paymentPage = new PaymentPageSdk('000001680211111-80211111');
 
paymentPage.openPopup({
                        amount: 10.10,
                        orderId: '91700',
                        extra: '{"user": "userName"}',                      
                        receipt: '{"check": "check"}',
                        style: {
                            "button": {
                            "backgroundColor": "#ffc800"
                        },
                        comment: 'Тирольский пирог с яблоками, грушами, ветчиной, сыром, ананасами, 50см'
                    })
        .then(resolve => {
                        console.log(resolve, "Спасибо");
                    })
        .catch(() => {
                        console.log("Неудача");
                    });
);
```

##### Для открытия в новой вкладке:

```
const paymentPage = new PaymentPageSdk('000001680211111-80211111');

paymentPage.openWindow({
                        amount: 10.10,
                        orderId: '91700',
                        extra: '{"user": "userName"}',                      
                        receipt: '{"check": "check"}',
                        style: '{
                            "button": {
                            "backgroundColor": "#ffc800"
                        }',
                        successUrl: 'http://fb.com',
                        failUrl: 'http://vc.ru',
                        comment: 'Тирольский пирог с яблоками, грушами, ветчиной, сыром, ананасами, 50см'
                    });
```

##### Для открытия в той же вкладке:
 
То же самое, что и `открытие в новой вкладке`, но только с использованием метода paymentPage.replace()

Обратите внимание, что параметры successUrl и failUrl передаются только в методах openWindow() и replace(). Это позволяет продавцу, в зависимости от статуса оплаты (success или failed) перенаправить пользователя на нужную продавцу страницу. 

В методе openPopup(), в зависимости от статуса оплаты пользователю придёт уведомление об успешной/неуспешной оплате, поэтому делать redirect не нужно.

## Дополнительно

#### Для использования в React стилей пропишите следующее:

подключение стилей напрямую:

```
import '@raiffeisen-ecom/payment-sdk/lib-style/index.css';
```

подключение стилей, которые зашиты в js-файл:

```
import PaymentPageSdk from '@raiffeisen-ecom/payment-sdk/lib-style';
```

#### Для подключения стилей в html-файле пропишите следующее:
 
подключение стилей напрямую:

```
<link rel="stylesheet" href="https://e-commerce.raiffeisen.ru/pay/sdk/payment.min.css">
```
 
подключение стилей, которые зашиты в js-файл:

```
<script src="https://e-commerce.raiffeisen.ru/pay/sdk/payment.min.js"></script>
```
