import React from "react";
import { render, screen } from "@testing-library/react";

import ShoppinglistEditDialogComponent from "../ShoppinglistEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders shoppinglist edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ShoppinglistEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("shoppinglist-edit-dialog-component")).toBeInTheDocument();
});
