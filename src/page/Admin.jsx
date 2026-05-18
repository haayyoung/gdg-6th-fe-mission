import RegisterSection from '../components/RegisterSection'
import StockSection from '../components/StockSection'
import DeleteSection from '../components/DeleteSection'

function Admin() {
  return (
    <main className="flex flex-col items-center pt-10">
      <div className="w-[620px]">
        <RegisterSection />

        <StockSection />

        <DeleteSection />
      </div>
    </main>
  )
}

export default Admin