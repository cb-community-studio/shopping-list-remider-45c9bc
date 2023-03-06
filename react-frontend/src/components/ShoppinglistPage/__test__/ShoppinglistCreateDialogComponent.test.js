import React from "react";
import { render, screen } from "@testing-library/react";

import ShoppinglistCreateDialogComponent from "../ShoppinglistCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders shoppinglist create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ShoppinglistCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("shoppinglist-create-dialog-component")).toBeInTheDocument();
});
