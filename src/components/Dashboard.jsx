import React from 'react';
import Layout from '../components/Layout';

const Dashboard = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <iframe 
          title='Iframe 1'
          className="w-full h-96 border border-gray-300 rounded-lg" 
          src="https://thingspeak.com/channels/2732869/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=temperatureDHT11&type=line">
        </iframe>

        <iframe 
          title='Iframe 2'
          className="w-full h-96 border border-gray-300 rounded-lg" 
          src="https://thingspeak.com/channels/2732869/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=temperatureDS18B20&type=line">
        </iframe>

        <iframe
          src="https://thingspeak.com/channels/2732869/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
          title="Iframe 3"
          className="w-full h-96 border border-gray-300 rounded-lg"
        ></iframe>

      </div>
    </Layout>
  );
};

export default Dashboard;
