import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { CardiovascularModule } from './components/CardiovascularModule';
import { MicrocontrollerPage } from './components/MicrocontrollerPage';
import { GlucoseModule } from './components/GlucoseModule';
import { NeuralModule } from './components/NeuralModule';
import { PharmaModule } from './components/PharmaModule';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: 'cardiovascular', Component: CardiovascularModule },
      { path: 'glucosa', Component: GlucoseModule },
      { path: 'neuronal', Component: NeuralModule },
      { path: 'farmaco', Component: PharmaModule },
      { path: 'microcontrolador', Component: MicrocontrollerPage },
      { path: '*', Component: Dashboard },
    ],
  },
]);
