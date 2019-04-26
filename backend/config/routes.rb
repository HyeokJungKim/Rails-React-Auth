Rails.application.routes.draw do
  resources :snacks, only: [:index]
  resources :users, only: [:show]

  post "/login", to: "users#login"

  post "/snacks/:id/buy", to: "snacks#buy"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
