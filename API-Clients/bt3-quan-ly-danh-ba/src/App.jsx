import { Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts";
import AddContacts from "./pages/AddContacts";

export default function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Contacts />}
            />
            <Route
                path="/addcontact/:task/:contactId"
                element={<AddContacts />}
            />
        </Routes>
    );
}
