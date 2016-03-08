class User < ActiveRecord::Base
	# include ActiveModel::Serialization

	# attr_accessor :name, :data

	# def attributes
	# 	{'name' => nil, 'data'=> nil}
	# end



	def self.import(file)
		rows = CSV.read(file.path)
		i = 5
		data_str = ''

		while i < rows.size do
			t = Time.parse(rows[i][1] + " " + rows[i][2])

			data_str = data_str + t.to_s + '^' + rows[i][4] + '$'
			i += 1
		end

#		data_yaml = YAML::dump(data_array)

		@hash = {:data => data_str}

		User.create!(@hash)
	end

end
