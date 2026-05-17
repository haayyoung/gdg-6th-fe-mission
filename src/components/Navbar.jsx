import { useNavigate } from 'react-router'

function Navbar() {
  const navigate = useNavigate()

  return (
    <header className="flex items-center justify-center gap-10 py-3 border-b">
      <img
        src="/gdg-logo.svg"
        alt="GDG Logo"
        className="w-12 cursor-pointer"
        onClick={() => navigate('/')}
      />

      <nav className="flex gap-6 text-sm text-gray-500">
        <button onClick={() => navigate('/category')}>
          카테고리 필터링
        </button>

        <button onClick={() => navigate('/price')}>
          가격 범위 필터링
        </button>

        <button onClick={() => navigate('/product')}>
          상품 정렬
        </button>
      </nav>

      <button onClick={() => navigate('/admin')} className="px-4 py-1 text-sm text-blue-500 border border-blue-300 rounded-md">
         관리자
      </button>
    </header>
  )
}

export default Navbar