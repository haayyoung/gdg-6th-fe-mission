function Navbar() {
  return (
    <div className="navbar">
      <a href="#">
        <img src="/gdg-logo.svg" alt="GDG 로고" className="logo" />
      </a>

      <div className="nav-buttons">
        <button onClick={() => console.log('카테고리 필터링 클릭')}>
          카테고리 필터링
        </button>

        <button onClick={() => console.log('가격 범위 필터링 클릭')}>
          가격 범위 필터링
        </button>

        <button onClick={() => console.log('상품 정렬 클릭')}>
          상품 정렬
        </button>
      </div>

      <button onClick={() => console.log('관리자 클릭')}>관리자</button>
    </div>
  )
}

export default Navbar