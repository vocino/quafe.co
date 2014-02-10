QuafeCo::Application.routes.draw do
  get 'dashboard/index'

  devise_for :users, path: '', path_names: { sign_in: 'signin', sign_out: 'signout', sign_up: 'signup' }
  resources :accounts

  root 'dashboard#index'
end
