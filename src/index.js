import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { registerLicense } from '@syncfusion/ej2-base';
import { ContextProvider } from './contexts/ContextProvider';

// Registering Syncfusion license key
registerLicense('Mgo+DSMBaFt/QHRqVVhjVFpGaV5GQmFJfFBmRGJTelx6cVJWACFaRnZdQV1iSHtRdUBhXHhXdXNR;Mgo+DSMBPh8sVXJ0S0J+XE9HflRAQmJNYVF2R2BJfl96cVdMZVtBJAtUQF1hSn5Sd0BhWnpcdXNcQWlY;ORg4AjUWIQA/Gnt2VVhkQlFadVdJX3xIekx0RWFab19xflBEallWVBYiSV9jS31Td0RmW3xbcnFdRmBdVQ==;OTQ0OTc1QDMyMzAyZTM0MmUzMFBkd282aUVDYmlwZWZ6Yjk3bk9CR3JGWnhnbkZBNGFLM1M1UUxFSll1Y3M9;OTQ0OTc2QDMyMzAyZTM0MmUzMFFFTWp2Q3VGM3hwVUI2ekcyNmN3eG5kZXdsTjJCeENyRzRlQjAzWkg3TEU9;NRAiBiAaIQQuGjN/V0Z+WE9EaFxKVmFWf1dpR2NbfE5xdV9DYlZUQ2Y/P1ZhSXxQdkRiXH1ddXZQTmBVWUA=;OTQ0OTc4QDMyMzAyZTM0MmUzMFBVdUtyZ2FkaitPQStJazRmNVRIdmllMGUrMFJ6T2RLUFl2dGR4OTFSQms9;OTQ0OTc5QDMyMzAyZTM0MmUzMFpKV0EzKzJMT3dtc1hwVS9IRHgyb0pMQUNZcDBJY0lPc2NtaW1DWTk0Q0k9;Mgo+DSMBMAY9C3t2VVhkQlFadVdJX3xIekx0RWFab19xflBEallWVBYiSV9jS31Td0RmW3xbcnFdRGZaVQ==;OTQ0OTgxQDMyMzAyZTM0MmUzMGtaYmFYbDBlYjRJMUJZSnYyUTZIVHNRYWdHaXpDR2RjYnJDL05FY0ZGamM9;OTQ0OTgyQDMyMzAyZTM0MmUzMGVnWUh5NzV6VVBKd3BGUDE4aVdqQmFQYXMxTDZ2N29sZ2Q4WjlseU9aVGM9;OTQ0OTgzQDMyMzAyZTM0MmUzMFBVdUtyZ2FkaitPQStJazRmNVRIdmllMGUrMFJ6T2RLUFl2dGR4OTFSQms9');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
