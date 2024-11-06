import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import AddChild from './pages/AddChild'
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import Shopes from './pages/Shopes';
import ChoseQuestion from './pages/ChoseQuestion';
import Child from './pages/Child';
import Carrer from './pages/Career';
import Villagers from './pages/Villagers';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Guardian of Dashboard" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/ChoseQuestion"
          element={
            <>
              <PageTitle title="Chose Quetions" />
              <ChoseQuestion />
            </>
          }
        />
       
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/Child"
          element={
            <>
              <PageTitle title="Child" />
              <Child />
            </>
          }
        />
        <Route
          path="/Carrer"
          element={
            <>
              <PageTitle title="Carrer" />
              <Carrer />
            </>
          }
        />

         <Route
          path="/Shops"
          element={
            <>
              <PageTitle title="Shop Product" />
              <Shopes />
            </>
          }
        />

        <Route
          path="/Villagers"
          element={
            <>
              <PageTitle title="Villagers" />
              <Villagers />
            </>
          }
        />
        <Route
          path="/AddChild"
          element={
            <>
              <PageTitle title="Add Child Information" />
              <AddChild />
            </>
          }
        />
       
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </>
          }
        />
        
       
      </Routes>
    </DefaultLayout>
  );
}

export default App;
