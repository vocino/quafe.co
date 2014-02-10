guard 'livereload' do
  watch(%r{app/views/.+\.(erb|haml)$})
  watch(%r{app/helpers/.+\.rb})
  watch(%r{public/.+\.(css|js|html)})
  watch(%r{config/locales/.+\.yml})
  # Rails Assets Pipeline
  watch(%r{(app|vendor)(/assets/\w+/(.+\.(scss|css|js|coffee|html|haml|png|jpg|svg))).*}) { |m| "/assets/#{m[3]}" }
end

guard :rubocop do
  watch(%r{(?:.+/)?\.rubocop\.yml$}) { |m| File.dirname(m[0]) }
  watch(%r{.+\.rb$})
end
