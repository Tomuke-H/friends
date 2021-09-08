class CreateFriends < ActiveRecord::Migration[6.1]
  def change
    create_table :friends do |t|
      t.string :name
      t.integer :age
      t.string :sign
      t.string :mental_illness

      t.timestamps
    end
  end
end
