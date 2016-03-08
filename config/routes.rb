MarchFourth::Application.routes.draw do
  resources :users do
    collection {post :import}
  end

  root to: "users#index"
end