import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from "@nextui-org/react";
import { ReactGPT } from './ReactGPT';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <NextUIProvider>
    <ReactGPT />
  </NextUIProvider>,
)
