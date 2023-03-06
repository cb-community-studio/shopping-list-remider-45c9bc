import React from "react";
import { render, screen } from "@testing-library/react";

import PersonalinfoEditDialogComponent from "../PersonalinfoEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders personalinfo edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PersonalinfoEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("personalinfo-edit-dialog-component")).toBeInTheDocument();
});
