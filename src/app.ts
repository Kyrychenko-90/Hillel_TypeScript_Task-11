showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt!.innerText = `Hello from ${name}`;
}

/*
1. Об'явіть аліас типу BookRequiredFields, використовуючи інтерфейс Book та утиліту Required.
 */

interface Book {
    title: string;
    author: string;
    year: number;
}

type BookRequiredFields = Required<Book>

/*
2. Об'явіть змінну bookRequiredFields типу BookRequiredFields та присвойте їй відповідний об'єкт.
 */

const bookRequiredFields: BookRequiredFields = {
    title: 'Harry Potter and the Philosophers Stone',
    author: 'Joanne Rowling',
    year: 1995
};

console.log(bookRequiredFields);

/*
3. Об'явіть аліас типу UpdatedBook, використовуючи інтерфейс Book та утиліту Partial
 */

type UpdatedBook = Partial<Book>

/*
4. Об'явіть змінну updatedBook типу UpdatedBook і присвойте їй відповідний об'єкт.
 */

const updatedBook: UpdatedBook = {
    title: 'Harry Potter and the Chamber of Secrets',
    year: 1998
};

console.log(updatedBook);

/*
5. Об'явіть аліас типу AuthorWoEmail, використовуючи інтерфейс Author та утиліту Omit.
 */

interface Author {
    name: string;
    country: string;
    age: number;
}

type AuthorWoEmail = Omit<Author, 'country'>;

const author: AuthorWoEmail = {
    name: 'Joanne Rowling',
    age: 58
};

console.log(author);

/*
6. Об'явіть аліас СreateCustomerFunctionType для функціонального типу функції createCustomer().
    Функція приймає рядок і число і повертає їх конкатенацію.
 */

type СreateCustomerFunctionType = (name: string, age: number) => string;

const createCustomer: СreateCustomerFunctionType = (name: string, age: number) => {
    return name + age.toString();
}

/*
7. Об'явіть змінну params, використовуючи аліас типу СreateCustomerFunctionType і утиліту Parameters,
    викличте функцію createCustomer(), передавши змінну params.
 */

let params: Parameters<СreateCustomerFunctionType>;
const authorName: string = 'Joanne Rowling';
const authorAge: number = 58;
params = [authorName, authorAge];
console.log(createCustomer(...params));

/*
8. Об'явіть аліас fn для функціонального типу функції, яка приймає три параметри з типами string,
    number, boolean і повертає тип symbol.
 */

type fn = (param1: string, param2: number, param3: boolean) => symbol;

/*
9. Об'явіть аліаси типів Param1<T>, Param2<T>, Param3<T>,
    які повертають тип першого, другого та третього параметрів функції відповідно.
 */

type Param1<T extends (...args: any) => any> = Parameters<T>[0];
type Param2<T extends (...args: any) => any> = Parameters<T>[1];
type Param3<T extends (...args: any) => any> = Parameters<T>[2];

/*
10. Об'явіть аліаси P1, P2, P3 та отримайте типи першого, другого та третього параметрів типу fn.
    Наступні пункти не обов'язкові, але цікаві
 */

type P1 = Param1<fn>;
type P2 = Param2<fn>;
type P3 = Param3<fn>;

/*
11. Створіть утиліти RequiredProps<T> та OptionalProps<T>, які повертають union тип required
    та optional властивостей об'єкта. Використовуйте mapped type для перебору ключів T та
    conditional type для трансформації значень ключів типу T.
    Додайте загальне обмеження для T розширивши його від типу object у RequiredProps та OptionalProps.
 */

type RequiredProps<T extends object> = {
    [K in keyof T]-?: T[K];
};

type OptionalProps<T extends object> = {
    [K in keyof T]?: T[K];
};

/*
12. Об'явіть аліас типу BookRequiredProps та BookOptionalProps, використовуючи інтерфейс Book та
    утиліти RequiredProps та OptionalProps. Спробуйте замість Book передати примітивний тип.
 */

type BookRequiredProps = RequiredProps<string>;
type BookOptionalProps = OptionalProps<string>;

/*
13. Створіть утиліту RemoveProps <T extends object, TProps extends keyof T>,
    яка видаляє властивості TProps з переданого типу T.
 */

type RemoveProps <T extends object, TProps extends keyof T> = {
    [K in keyof T as K extends TProps ? never : K]: T[K];
}

/*
14. Об'явіть аліас типу BookRequiredPropsType та BookOptionalPropsType,
    використовуючи інтерфейс Book, аліаси типу BookRequiredProps та BookOptioalProps
    та утиліту RemoveProps Спробуйте замість Book передати Author.
 */

type BookRequiredPropsType = RemoveProps<Author, BookRequiredProps>;
type BookOptionalPropsType = RemoveProps<Author, BookOptionalProps>;

/*
15. Створіть функцію update(), яка приймає один параметр типу boolean.
    Якщо значення аргументу true, функція повинна повертати значення типу string.
    Якщо значення аргументу false, функція повинна повертати значення типу number.
 */

function update(value: boolean): string | number {
    return value ? 'Joanne Rowling' : 58
}



