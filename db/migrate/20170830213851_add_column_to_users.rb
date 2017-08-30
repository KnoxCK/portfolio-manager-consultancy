class AddColumnToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :linked_in_url, :string
  end
end
