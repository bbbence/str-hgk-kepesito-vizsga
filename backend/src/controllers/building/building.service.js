/**
 * @TODO : Mongoose modellek segítségével frissitsen egy 'building' entitást az adatbázisban.
 * - el kell menteni egy új "classroom" entitást.
 * - ki kell nyeri az új "classroom" id-ját.
 * - az id-t helyezze el a megfelelő 'Building' entitás 'classrooms' listájába
 *
 * A @getAll metódus adja vissza a populált teljes "building" listát
 */
const Building = require('../../models/building.model');

exports.create = buildingData => {
    const building = new building(buildingData);
    return building.save();
};

exports.findOne = id => Building.findById(id).populate('classrooms');

exports.getAll = () => building.getAll.populate('classrooms');

exports.update = (buildingId, className) => Classroom.findByIdAndUpdate(id, updateData, {new: true});
