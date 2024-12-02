// src/App.tsx

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="bg-neutral-50 min-h-screen">
        <div className="w-[1280px] mx-auto py-4">
          <h1 className="text-[2rem] text-neutral-950 font-bold">
            Product List:
          </h1>
          <div className="flex gap-x-4">
            <div className="w-[80%]">
              <ProductList />
            </div>
            <Cart />
          </div>
        </div>
      </main>
    </QueryClientProvider>
  );
}

export default App;
