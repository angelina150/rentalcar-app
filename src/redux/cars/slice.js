import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, fetchCarById, fetchBrands } from "./operations";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    filters: {},
    items: [],
    brands: [],
    favorites: [],
    totalPages: "",
    page: "",
    loading: false,
    error: null,
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    resetFilters: (state) => {
      state.filters = {};
    },
    setPage: (state, action) => {
      state.page = +action.payload || 1;
    },
    setAllCars: (state, action) => {
      state.items = action.payload;
    },
    toggleFavorite: (state, action) => {
      const carId = action.payload;
      const index = state.favorites.indexOf(carId);

      if (index === -1) {
        state.favorites.push(carId);
      } else {
        state.favorites = state.favorites.filter((id) => id !== carId);
      }
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        const { cars, totalPages, page } = action.payload;
        state.loading = false;
        state.error = null;

        if (!Array.isArray(state.items)) {
          state.items = [];
        }

        const existingCars = state.items.map((car) => car.id);
        const newCars = cars.filter((car) => !existingCars.includes(car.id));

        if (page === 1) {
          state.items = newCars;
        } else {
          state.items = [...state.items, ...newCars];
        }

        state.totalPages = totalPages;
        state.page = parseInt(page, 10);
      })

      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCarById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchBrands.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const { setFilters, setPage, setAllCars, toggleFavorite, resetFilters } =
  carsSlice.actions;

export const carsReducer = carsSlice.reducer;
