class CreateWhatWeDos < ActiveRecord::Migration[5.0]
  def change
    create_table :what_we_dos do |t|
      t.string :title
      t.text :body

      t.timestamps
    end
  end
end
