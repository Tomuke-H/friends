class Friend < ApplicationRecord
    has_many :movies, dependent: :destroy
end
