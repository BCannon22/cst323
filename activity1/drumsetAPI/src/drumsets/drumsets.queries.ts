export const drumsetQueries = {
	readDrumsets:
		`select drumsetId as drumsetId, name as name, price as price, type as type, brand as brand, imageUrl as imageUrl from drumsets.drumsets`,
	readDrumsetsByDrumsetId:
		`select drumsetId as drumsetId, name as name, price as price, type as type, brand as brand, imageUrl as imageUrl from drumsets.drumsets
	   where drumsets.drumsets.drumsetId = ?`,
	updateDrumset:
		`update drumsets.drumsets set name=?, price=?, type=?, brand=?, imageUrl=? where drumsetId = ?`,
	createDrumset:
		`insert into drumsets.drumsets(name, price, type, brand, imageUrl) values(?,?,?,?,?)`,
	deleteDrumset:
		`delete from drumsets.drumsets where drumsetId = ?`,
}
