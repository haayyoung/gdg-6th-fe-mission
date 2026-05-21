## 프로젝트 폴더 구조와 역할 정리

이번 쇼핑몰 프로젝트에서는 기능과 역할에 따라 폴더를 분리하여 관리하였다. 프로젝트가 커질수록 모든 코드를 한 곳에 작성하면 파일이 길어지고, 어떤 코드가 어떤 역할을 하는지 파악하기 어려워지기 때문이다. 따라서 페이지, 컴포넌트, API, 상태 관리 등을 역할별로 나누어 유지보수하기 쉬운 구조를 만들고자 하였다.

### 1. pages 폴더

```txt
src/pages
```

`pages` 폴더는 실제 URL과 연결되는 화면 컴포넌트를 관리하는 폴더이다.

- `Home.jsx`
- `Category.jsx`
- `Price.jsx`
- `Product.jsx`
- `Admin.jsx`

이 컴포넌트들은 React Router를 통해 페이지 단위로 이동되기 때문에 `pages` 폴더로 분리하였다.

---

### 2. components 폴더

```txt
src/components
```

`components` 폴더는 여러 페이지에서 재사용할 수 있는 UI 컴포넌트를 관리하는 폴더이다.

- `Navbar.jsx`
- `Footer.jsx`
- `Content.jsx`
- `Item.jsx`
- `FormInput.jsx`
- `CategoryButton.jsx`
- `RegisterSection.jsx`
- `StockSection.jsx`
- `DeleteSection.jsx`

예를 들어 `FormInput`은 상품명, 수량, 가격 입력창에서 반복되는 구조를 줄이기 위해 공통 컴포넌트로 만들었다. 또한 `CategoryButton`은 반복되는 버튼 UI를 재사용하기 위해 분리하였다.

---

### 3. apis 폴더

```txt
src/apis
```

`apis` 폴더는 백엔드와 통신하는 API 요청 함수를 관리하는 폴더이다.

- `shopApi.js`

기존에는 컴포넌트 내부에서 직접 `fetch`를 사용하려고 했지만, API 요청 코드를 분리하면 화면 컴포넌트가 더 깔끔해지고 유지보수가 쉬워진다. 또한 API 주소가 변경되더라도 한 파일만 수정하면 된다는 장점이 있다.

---

### 4. stores 폴더

```txt
src/stores
```

`stores` 폴더는 Zustand를 사용한 전역 상태 관리 파일을 관리하는 폴더이다.

- `cartStore.js`

장바구니 데이터처럼 여러 컴포넌트에서 함께 사용해야 하는 상태를 전역으로 관리하기 위해 store를 분리하였다.

---

## 폴더 구조를 이렇게 만든 이유

처음에는 기능 수가 적어서 한 파일 안에 여러 코드를 작성해도 큰 문제가 없어 보였다. 하지만 페이지와 기능이 늘어나면서 코드가 길어지고, 수정할 때 어떤 부분을 고쳐야 하는지 찾기 어려워졌다.

따라서 역할별로 폴더를 분리하여:
- 코드의 책임을 명확하게 하고
- 재사용성을 높이고
- 유지보수를 쉽게 하고
- 협업 시 다른 개발자가 구조를 빠르게 이해할 수 있도록

프로젝트 구조를 개선하였다.