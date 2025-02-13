const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <div className="flex space-x-3">
          <select className="rounded-lg border-gray-300 text-sm">
            <option>7 Hari Terakhir</option>
            <option>30 Hari Terakhir</option>
            <option>Tahun Ini</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Pendapatan', value: 'Rp 12.500.000', change: '+12.5%', icon: '💰' },
          { label: 'Total Produk', value: '245', change: '+3.2%', icon: '📦' },
          { label: 'Transaksi', value: '1,234', change: '+8.1%', icon: '🛍️' },
          { label: 'Pelanggan Aktif', value: '892', change: '+5.4%', icon: '👥' },
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-2xl">{stat.icon}</span>
              <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">
                {stat.change}
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-600">{stat.label}</p>
            <p className="text-2xl font-semibold text-gray-900 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Transaksi Terbaru</h2>
        </div>
        <div className="p-6">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500">
                <th className="pb-4">ID Transaksi</th>
                <th className="pb-4">Pelanggan</th>
                <th className="pb-4">Produk</th>
                <th className="pb-4">Total</th>
                <th className="pb-4">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { id: 'TRX-001', customer: 'Budi Santoso', product: 'Kemeja Putih', total: 'Rp 250.000', status: 'Selesai' },
                { id: 'TRX-002', customer: 'Ani Wijaya', product: 'Celana Jeans', total: 'Rp 350.000', status: 'Proses' },
                { id: 'TRX-003', customer: 'Citra Dewi', product: 'Tas Ransel', total: 'Rp 450.000', status: 'Selesai' },
              ].map((trx, index) => (
                <tr key={index} className="border-t">
                  <td className="py-4 text-gray-900">{trx.id}</td>
                  <td className="py-4 text-gray-900">{trx.customer}</td>
                  <td className="py-4 text-gray-600">{trx.product}</td>
                  <td className="py-4 text-gray-900 font-medium">{trx.total}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      trx.status === 'Selesai' 
                        ? 'bg-green-50 text-green-700'
                        : 'bg-yellow-50 text-yellow-700'
                    }`}>
                      {trx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
