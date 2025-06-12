import { useState } from 'react';
import './App.css';
import mockSkips from './mockSkips';

const sizes: Record<number, string> = {
  4: 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg',
  6: 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/6-yarder-skip.jpg',
  8: 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/8-yarder-skip.jpg',
  10: 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/10-yarder-skip.jpg',
  12: 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/12-yarder-skip.jpg',
  14: 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/14-yarder-skip.jpg',
  16: 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/16-yarder-skip.jpg',
  20: 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/20-yarder-skip.jpg',
  40: 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/40-yarder-skip.jpg',
};

function App() {
  const [selectedSkip, setSelectedSkip] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSkipSelect = (skipId: number) => {
    setSelectedSkip(skipId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedSkip(null);
  };

  const selectedSkipObj = mockSkips.find((skip) => skip.id === selectedSkip);
  const selectedPrice = selectedSkipObj ? `£${selectedSkipObj.price_before_vat.toLocaleString()}` : '';
  const selectedSize = selectedSkipObj ? `${selectedSkipObj.size} Yard Skip` : '';

  return (
    <div className="flex min-h-screen font-sans">
      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Progress Bar */}
        <div className="progress-bar mb-6">
          {['Postcode', 'Waste Type', 'Select Skip', 'Permit Check', 'Choose Date', 'Payment'].map((step, index) => (
            <span key={index} className={index < 3 ? 'active' : ''}>
              {step}
            </span>
          ))}
        </div>

        {/* Page Title */}
        <h1 className="text-2xl font-bold mb-2">Choose Your Skip Size To Purchase</h1>

        {/* Skip Options */}
        <div className="skip-options-grid">
          {mockSkips.map((skip) => {
            const isSelected = selectedSkip === skip.id;
            const isDisabled = skip.forbidden;

            return (
              <div
                key={skip.id}
                className={`skip-card ${isSelected ? 'selected' : ''} ${isDisabled ? 'forbidden' : ''}`}
                style={isDisabled ? { opacity: 0.5, pointerEvents: 'none' } : {}}
              >
                <div className="skip-image-wrapper">
                  <img
                    src={sizes[skip.size]}
                    alt={`${skip.size} Yard Skip`}
                    className="skip-image"
                  />
                  <span className="skip-size-badge">{skip.size} Yards</span>
                </div>
                <div className="skip-details">
                  <p className="skip-title">{skip.size} Yard Skip</p>
                  <p className="skip-period">{skip.hire_period_days} day hire period</p>
                  <p className="skip-price">£{skip.price_before_vat}</p>
                  {skip.transport_cost !== null && (
                    <p className="skip-extra">Transport: £{skip.transport_cost}</p>
                  )}
                  {skip.per_tonne_cost !== null && (
                    <p className="skip-extra">Per tonne: £{skip.per_tonne_cost}</p>
                  )}
                  <div className="skip-badges space-x-2 mt-2">
                    {skip.allowed_on_road && <span className="badge badge-onroad">On Road Allowed</span>}
                    {skip.allows_heavy_waste && <span className="badge badge-heavy">Heavy Waste</span>}
                    {skip.forbidden && <span className="badge badge-forbidden">Not Available</span>}
                  </div>
                </div>
                <button
                  className={`select-button ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSkipSelect(skip.id)}
                  disabled={isSelected || isDisabled}
                >
                  {isDisabled ? 'Unavailable' : isSelected ? 'Selected' : 'Select This Skip →'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer Bar */}
        <div className="footer-bar mt-6 flex justify-between items-center border-t pt-4">
          {selectedSkipObj && !showModal && (
            <span className="text-gray-700">
              {selectedSize} <span className="footer-price font-bold">{selectedPrice}</span> – {selectedSkipObj.hire_period_days} day hire
            </span>
          )}
          <div className="footer-buttons space-x-2">
            <button className="footer-back bg-gray-200 px-4 py-2 rounded">Back</button>
            <button
              className="footer-continue bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
              disabled={!selectedSkip}
            >
              Continue →
            </button>
          </div>
        </div>

        {/* Modal */}
        {showModal && selectedSkipObj && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="modal-close" onClick={handleCloseModal}>×</button>
              <h2 className="text-xl font-bold mb-4">{selectedSize}</h2>
              <img
                src={sizes[selectedSkipObj.size]}
                alt={selectedSize}
                className="modal-image mb-4"
              />
              <p className="mb-2">Price: <strong>{selectedPrice}</strong></p>
              <p className="mb-2">Hire Period: <strong>{selectedSkipObj.hire_period_days} days</strong></p>
              <p className="mb-4 text-gray-600">Confirm this skip to proceed or close to select another.</p>
              <button
                className="modal-confirm bg-blue-600 text-white px-4 py-2 rounded"
                onClick={() => setShowModal(false)}
              >
                Confirm
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
