const set_options = async (user, options) => {
    try {
        user.options = options;
        const updated = await user.save();
        return true
      } catch (err) {
        console.log(err);
        throw err
    }
}

module.exports = {set_options}