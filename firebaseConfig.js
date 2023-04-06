import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

import { 
  FB_APIKEY, 
  FB_AUTH_DOMAIN, 
  FB_DATABASE_URL, 
  FB_PROJECT_ID, 
  FB_STORAGE_BUCKET, 
  FB_MESSAGEING_SENDER_ID, 
  FB_APP_ID, 
  FB_MEASUREMENT_ID 
} from '@env'

const firebaseConfig = {
  apiKey: FB_APIKEY,
  authDomain: FB_AUTH_DOMAIN,
  databaseURL: FB_DATABASE_URL,
  projectId: FB_PROJECT_ID,
  storageBucket: FB_STORAGE_BUCKET,
  messagingSenderId: FB_MESSAGEING_SENDER_ID,
  appId: FB_APP_ID,
  measurementId: FB_MEASUREMENT_ID
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);