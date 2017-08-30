Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  root to: 'pages#home'
  get 'whatwedo', to: 'pages#whatwedo'
  get 'terms', to: 'pages#terms'
  get 'downloadbrochure', to: 'application#download_brochure'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
