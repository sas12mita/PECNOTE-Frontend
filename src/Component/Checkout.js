import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
import Footer from './Footer';
import OrderSummary from './OrderSummary';

const CheckoutForm = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({
    homeAddress: '',
    homePhone: '',
    faculty: '',
    roomNo: '',
  });

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/auth/createAddress', {
        type: selectedOption,
        ...formData,
      });
      toast.success('Address saved successfully!');
      console.log('Address saved:', response.data);
    } catch (error) {
      toast.error('Error saving address');
      console.error('Error saving address:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 '>
            <br /><br />
            <form onSubmit={handleSubmit} style={{height:"auto",padding:20,backgroundColor:'rgb(222, 238, 248)'}}>
              <div className="form-group">
                <label htmlFor="category">Select Address</label>
                <select
                  id="category"
                  className="form-control"
                  value={selectedOption}
                  onChange={handleSelectChange}
                >
                  <option value="">Select an address</option>
                  <option value="home">Home</option>
                  <option value="college">College</option>
                </select>
              </div>

              {selectedOption === 'home' && (
                <div>
                  <div className="form-group">
                    <label htmlFor="homeAddress">Home Address</label>
                    <input
                      type="text"
                      id="homeAddress"
                      className="form-control"
                      placeholder="Enter your home address"
                      value={formData.homeAddress}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="homePhone">Home Phone</label>
                    <input
                      type="text"
                      id="homePhone"
                      className="form-control"
                      placeholder="Enter your home phone number"
                      value={formData.homePhone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              )}

              {selectedOption === 'college' && (
                <div>
                  <div className="form-group">
                    <label htmlFor="faculty">Faculty</label>
                    <input
                      type="text"
                      id="faculty"
                      className="form-control"
                      placeholder="Enter your faculty"
                      value={formData.faculty}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="roomNo">Room No.</label>
                    <input
                      type="text"
                      id="roomNo"
                      className="form-control"
                      placeholder="Enter your Room No."
                      value={formData.roomNo}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              )}
              <br/>
              <button type="submit" className="btn btn-success">Add Address</button>
            </form>
          </div>
          <div className='col-md-1'></div>
          <div className='col-md-5'>
            <OrderSummary name="Confirm Order" />
          </div>
        </div>
      </div><br />
      <Footer />
    </div>
  );
};

export default CheckoutForm;
