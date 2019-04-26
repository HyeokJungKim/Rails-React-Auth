class CreateSnacks < ActiveRecord::Migration[5.2]
  def change
    create_table :snacks do |t|
      t.integer :cost
      t.string :name

      t.timestamps
    end
  end
end
