function Content() {
  return (
    <div className="content">
      <div className="search-box">
        <input type="text" placeholder="상품 검색..." />
        <button>검색</button>
      </div>

      <img src="/gdg-logo.svg" alt="GDG 로고" className="content-logo" />

      <p>검색 결과가 없습니다.</p>
    </div>
  )
}

export default Content