import React from "react";
import { render, screen } from "@testing-library/react";

import PersonalinfoPage from "../PersonalinfoPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders personalinfo page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PersonalinfoPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("personalinfo-datatable")).toBeInTheDocument();
    expect(screen.getByRole("personalinfo-add-button")).toBeInTheDocument();
});
