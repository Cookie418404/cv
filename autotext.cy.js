


describe('автотест на проверку логики восстановления пароля', function () {
it('Восстановление пароля', function () {
    cy.visit('https://login.qa.studio/'); // зашли на сайт
    cy.get('#forgotEmailButton').click();// нажал на кнопку
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');// проверяю цвет кнопки восстановить пароль
    cy.get('#mailForgot').type('german@dolnikov.r');// Ввели неверную почту
    cy.get('#restoreEmailButton').click();
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть кнопка крестик,и он виден для пользователя
} )
} )
describe('Проверка на негативный кейс авторизации', function () {
it('негативный кейс авторизации', function () {
    cy.visit('https://login.qa.studio/'); // зашли на сайт
    cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный @mail
    cy.get('#pass').type('Tarkov');// Ввели неверный пароль
    cy.get('#loginButton').click();// кликаем на кнопку
    cy.get('#messageHeader').contains('Такого логина или пароля нет');// Текст такого логина или пароля нет
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть кнопка крестик,и он виден для пользователя
} )
} )
describe('Проверка на негативный кейс авторизации', function () {
    it('негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('Escapefromtarkov@mail.ru'); // Ввели неверный @mail
        cy.get('#pass').type('iLoveqastudio1');// Ввели верный пароль
        cy.get('#loginButton').click();// кликаем на кнопку
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть кнопка крестик,и он виден для пользователя
    } )
    } )
    describe('Напиши проверку на негативный кейс валидации', function () {
        it('негативный кейс авторизации', function () {
            cy.visit('https://login.qa.studio/'); // зашли на сайт
            cy.get('#mail').type('germandolnikov.ru'); // Ввели верный без @ 
            cy.get('#pass').type('iLoveqastudio1');// Ввели верный пароль
            cy.get('#loginButton').click();// кликаем на кнопку
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть кнопка крестик,и он виден для пользователя
        } )
        } )

        describe('', function () {
            it('GerMan@Dolnikov.ru', function () {
                cy.visit('https://login.qa.studio/'); // зашли на сайт
                cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели с большими буквами почту
                cy.get('#pass').type('iLoveqastudio1');// Ввели верный пароль
                cy.get('#loginButton').click();// кликаем на кнопку
                cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть кнопка крестик,и он виден для пользователя
            } )
            } )



            describe('позитивный кейс авторизации', function () {
                it('Ввести правильный логин', function () {
                    cy.visit('https://login.qa.studio/'); // зашли на сайт
                    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');// проверяю цвет кнопки восстановить пароль
                    cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный @mail
                    cy.get('#pass').type('iLoveqastudio1'); //  Ввели верный пароль
                    cy.get('#loginButton').click(); // нажал войти
                    cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю что после авторазиции вижу текст
                    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
                    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть кнопка крестик,и он виден для пользователя
            
                } ) 
            } )


            describe('Покупка аватара', function () {                                // название набора тестов
                it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
                     cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
                     cy.get('input[type="email"]').type('egorushka-2000@mail.ru');                   // вводим логин
                     cy.get('input[type="password"]').type('Egorka4a44');               // вводим пароль
                     cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
                     cy.wait(2000);
                     cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
                     cy.get('[href="/shop"]').click();                               // нажимаем кнопку Магазин
                     cy.get('.available > button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
                     cy.get('.credit').type('4620869113632996');                     // вводим номер карты
                     cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
                     cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
                     cy.get('.k_input_name').type('NAME');                           // вводим имя владельца действия карты
                     cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
                     cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
                     cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
                     cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
                 });
             });
            // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
            