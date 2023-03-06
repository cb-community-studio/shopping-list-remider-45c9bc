import React from "react";
import { render, screen } from "@testing-library/react";

import ShoppinglistPage from "../ShoppinglistPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders shoppinglist page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ShoppinglistPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("shoppinglist-datatable")).toBeInTheDocument();
    expect(screen.getByRole("shoppinglist-add-button")).toBeInTheDocument();
});
