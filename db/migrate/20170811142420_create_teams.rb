class CreateTeams < ActiveRecord::Migration[5.0]
  def change
    create_table :teams do |t|
      t.string :name
      t.string :image
      t.string :tel
      t.string :string
      t.string :email
      t.text :bio

      t.timestamps
    end
  end
end
