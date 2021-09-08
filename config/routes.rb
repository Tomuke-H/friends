Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace: api do
    recources: friends do
      recources: movies do
      end
    end
  end

end
